(function () {
  const task = (id, name, icon, operation, options = {}) => ({ id, name, icon, operation, ...options });

  const baseChecks = [
    task("tyres", "Neumáticos, presión y desgaste", "◉", "Revisar", { km: 30000, months: 24 }),
    task("brakes", "Frenos, discos y pastillas", "⊘", "Revisar", { km: 30000, months: 24 }),
    task("brake-lines", "Latiguillos y conexiones de freno", "⊘", "Revisar", { km: 30000, months: 24 }),
    task("steering-suspension", "Dirección, fuelles y rótulas", "↔", "Revisar", { km: 30000, months: 24 }),
    task("driveshafts", "Palieres y guardapolvos", "↻", "Revisar", { km: 30000, months: 24 }),
    task("exhaust", "Sistema de escape", "≋", "Revisar", { km: 30000, months: 24 }),
    task("cabin", "Filtro de habitáculo", "≋", "Cambiar", { km: 30000, months: 24 }),
    task("battery", "Batería de 12 V", "ϟ", "Comprobar", { km: 30000, months: 24 }),
    task("wipers", "Luces, limpiaparabrisas y niveles", "✦", "Comprobar", { months: 12 }),
    task("climate", "Aire acondicionado: compresor y refrigerante", "❄", "Revisar", { km: 30000, months: 24 })
  ];

  const exactProfiles = [
    {
      id: "hyundai-i30-pde-10-tgdi-eu",
      match: v => v.brand === "Hyundai" && v.model === "i30" && Number(v.year) >= 2021 &&
        (/G3LE/i.test(v.engineCode || "") || (/1\.0\s*T-?GDi/i.test(v.engine || "") && Number(v.power) >= 100 && Number(v.power) <= 120)),
      title: "Hyundai i30 PDe · 1.0 T‑GDi (Europa)",
      source: "Manual del propietario Hyundai i30 PDe · programa europeo",
      sourceUrl: "https://instrukcje-obslugi.hyundai.pl/Publish/Instrukcja_obslugi_i30_PDe/7_index.html",
      note: "El intervalo que venza antes es el que manda. Confirma por VIN la especificación del aceite y las referencias de las piezas.",
      build(v) {
        const severe = v.usage === "severe";
        const items = [
          task("oil", "Aceite de motor y filtro", "◆", "Cambiar", {
            km: severe ? 7500 : 15000, months: severe ? 6 : 12,
            detail: severe ? "Uso exigente: intervalo reducido por el fabricante." : "Uso normal europeo. Comprueba nivel cada 500 km o antes de un viaje largo."
          }),
          task("turbo-intake", "Intercooler y manguitos de admisión/turbo", "↗", "Revisar", { km: 15000 }),
          ...baseChecks,
          task("brakefluid", "Líquido de frenos y embrague", "●", "Cambiar", { km: 30000, months: 24 }),
          task("air-inspect", "Filtro de aire del motor", "▦", "Inspeccionar", { firstKm: 30000, firstMonths: 24, km: 60000, months: 48, detail: "El fabricante alterna inspección y cambio: revisar a 30.000 km, cambiar a 60.000 km, y repetir el patrón." }),
          task("air", "Filtro de aire del motor", "▦", "Cambiar", { km: 60000, months: 48 }),
          task("spark", "Bujías T‑GDi", "✧", "Cambiar", { km: 75000, months: 60, detail: "Usar únicamente la referencia y grado térmico confirmados para el VIN/motor." }),
          task("drivebelt", "Correa auxiliar y tensores", "∞", "Revisar", { firstKm: 90000, firstMonths: 72, km: 30000, months: 24 }),
          task("coolant", "Refrigerante del motor", "◇", "Cambiar", { firstKm: 210000, firstMonths: 120, km: 30000, months: 24 }),
          task("cooling-system", "Sistema de refrigeración y fugas", "◇", "Revisar", { firstKm: 60000, firstMonths: 48, km: 30000, months: 24 }),
          task("fuel-vapour", "Manguitos de vapores y tapón de combustible", "◉", "Revisar", { km: 60000, months: 48 }),
          task("fuel-tank-filter", "Filtro de aire del depósito", "◉", "Revisar", { km: 60000, months: 48 }),
          task("fuel-filter", "Filtro de combustible", "◉", "Inspeccionar", { conditional: true, detail: "Sin cambio periódico fijo en el plan normal; revisar según calidad del combustible y síntomas." }),
          task("fuel-lines", "Tuberías y conexiones de combustible", "◉", "Revisar", { km: 60000, months: 48 }),
          task("manual-fluid", "Aceite de cambio manual", "⇄", "Inspeccionar", { km: 60000, months: 48, detail: "En uso normal no tiene cambio periódico. Cambiar si la caja se sumerge en agua; en uso severo, cambio a 120.000 km." })
        ];
        if ((v.tech || []).includes("mhev48") || v.fuel === "mhev") {
          items.push(task("mhsg-belt", "Correa MHSG de 48 V", "≈", "Cambiar", { km: 45000, months: 24 }));
          items.push(task("system48", "Sistema y batería de 48 V", "ϟ", "Revisar", { km: 30000, months: 24 }));
        }
        return items;
      }
    }
  ];

  const manualUrls = {
    SEAT: "https://www.seat.es/posventa/servicios/manuales",
    Volkswagen: "https://www.volkswagen.es/es/clientes/informacion-util/manuales.html",
    Renault: "https://www.user-manual.renault.com/es",
    Hyundai: "https://www.hyundai.com/uk/en/owners/owning-a-hyundai/owners-manuals.html",
    Ford: "https://www.ford.es/soporte/manuales-del-propietario",
    Opel: "https://www.opel.es/servicios/manuales.html"
  };

  function compatiblePlan(v) {
    const items = baseChecks.map(item => ({ ...item, km: null, months: null, verified: false }));
    if (v.fuel !== "electric") {
      items.unshift(task("oil", "Aceite de motor y filtro", "◆", "Cambiar", { verified: false }));
      items.push(task("air", "Filtro de aire del motor", "▦", "Cambiar", { verified: false }));
      items.push(task("coolant", "Refrigerante y manguitos", "◇", "Revisar", { verified: false }));
    }
    if (["gasoline", "hybrid", "phev", "mhev"].includes(v.fuel) || v.baseFuel === "gasoline") {
      items.push(task("spark", "Bujías", "✧", "Cambiar", { verified: false }));
    }
    if (v.fuel === "diesel" || v.baseFuel === "diesel") {
      items.push(task("fuel", "Filtro de combustible", "▤", "Cambiar", { verified: false }));
    }
    if ((v.tech || []).includes("dpf")) items.push(task("dpf", "DPF y sistema de emisiones", "≋", "Revisar", { verified: false }));
    if ((v.tech || []).includes("adblue")) items.push(task("adblue", "AdBlue/SCR", "◫", "Revisar", { verified: false }));
    if ((v.tech || []).includes("dct") || v.transmission === "automatic") items.push(task("gearbox", "Aceite de transmisión", "⇄", "Revisar/cambiar", { verified: false }));
    if (["electric", "hybrid", "phev", "mhev"].includes(v.fuel)) items.push(task("hv", "Sistema electrificado y refrigeración", "ϟ", "Revisar", { verified: false }));
    return {
      id: `compatible-${v.brand}-${v.model}`,
      title: `${v.brand} ${v.model} · plan por sistemas`,
      source: "Intervalos pendientes de confirmación por VIN",
      sourceUrl: manualUrls[v.brand] || "",
      note: "Se muestran solo tareas compatibles con la motorización. MotorClaro no asigna kilómetros genéricos cuando el fabricante los cambia según motor, año o mercado.",
      verified: false,
      items
    };
  }

  function resolve(v) {
    const exact = exactProfiles.find(profile => profile.match(v));
    if (!exact) return compatiblePlan(v);
    const items = exact.build(v);
    return { ...exact, verified: true, items, visits: serviceMilestones(items, Number(v.mileage) || 0) };
  }

  function serviceMilestones(items, mileage = 0, count = 8) {
    const interval = 15000;
    const first = Math.max(interval, Math.ceil(Math.max(0, mileage) / interval) * interval);
    return Array.from({ length: count }, (_, index) => first + index * interval).map(km => ({
      km,
      items: items.filter(item => {
        if (item.conditional) return false;
        const initial = item.firstKm || item.km;
        if (!initial || km < initial) return false;
        const repeat = item.km || item.firstKm || interval;
        return (km - initial) % repeat === 0;
      })
    })).filter(visit => visit.items.length);
  }

  globalThis.MOTORCLARO_MAINTENANCE = { resolve, exactProfiles, serviceMilestones };
})();
