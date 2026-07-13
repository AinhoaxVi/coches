const VEHICLES = {
  "SEAT": {
    "Ibiza": [2000, 2026], "León": [2000, 2026], "Toledo": [2000, 2019], "Ateca": [2016, 2026], "Arona": [2017, 2026]
  },
  "Volkswagen": {
    "Golf": [2000, 2026], "Polo": [2000, 2026], "Passat": [2000, 2026], "Touran": [2003, 2026], "Tiguan": [2007, 2026]
  },
  "Renault": {
    "Clio": [2000, 2026], "Mégane": [2000, 2026], "Scénic": [2000, 2026], "Captur": [2013, 2026]
  },
  "Hyundai": {
    "i20": [2008, 2026], "i30": [2007, 2026], "Tucson": [2004, 2026]
  },
  "Ford": {
    "Fiesta": [2000, 2023], "Focus": [2000, 2026], "Mondeo": [2000, 2022], "C-Max": [2003, 2019], "Kuga": [2008, 2026]
  },
  "Opel": {
    "Corsa": [2000, 2026], "Astra": [2000, 2026], "Zafira": [2000, 2026], "Insignia": [2008, 2022]
  }
};

const FUELS = {
  gasoline: "Gasolina", diesel: "Diésel", hybrid: "Híbrido", phev: "Híbrido enchufable", electric: "Eléctrico"
};

const SYMPTOMS = [
  { id: "start", icon: "◉", label: "No arranca o le cuesta" },
  { id: "power", icon: "↗", label: "Pierde potencia o da tirones" },
  { id: "warning", icon: "!", label: "Testigo encendido" },
  { id: "smoke", icon: "≋", label: "Humo u olor extraño" },
  { id: "heat", icon: "♨", label: "Se calienta demasiado" },
  { id: "noise", icon: "≈", label: "Ruido o vibración" }
];

const FAULTS = {
  battery: { name: "Batería descargada o deteriorada", systems: ["all"], urgency: "media", desc: "La tensión disponible puede ser insuficiente para arrancar o alimentar correctamente los sistemas." },
  alternator: { name: "Alternador o sistema de carga", systems: ["combustion"], urgency: "alta", desc: "La batería podría no estar recibiendo carga mientras el motor funciona." },
  starter: { name: "Motor de arranque", systems: ["combustion"], urgency: "media", desc: "El motor eléctrico de arranque o su solenoide podrían no accionar correctamente." },
  fuel: { name: "Alimentación o presión de combustible", systems: ["combustion"], urgency: "media", desc: "Una bomba, filtro o regulador puede estar reduciendo el caudal de combustible." },
  coils: { name: "Bobinas o bujías de encendido", systems: ["gasoline"], urgency: "media", desc: "Un fallo de encendido puede causar tirones, ralentí irregular y pérdida de potencia." },
  glow: { name: "Calentadores o módulo de precalentamiento", systems: ["diesel"], urgency: "baja", desc: "El precalentamiento insuficiente suele dificultar el arranque en frío." },
  egr: { name: "Válvula EGR sucia o bloqueada", systems: ["diesel"], urgency: "media", desc: "La recirculación de gases puede estar atascada y alterar la admisión." },
  dpf: { name: "Filtro de partículas saturado", systems: ["diesel"], urgency: "alta", desc: "El filtro puede necesitar una regeneración o revisión profesional." },
  lambda: { name: "Sonda lambda o mezcla incorrecta", systems: ["gasoline", "hybrid", "phev"], urgency: "media", desc: "La lectura de oxígeno puede estar alterando la mezcla y aumentando el consumo." },
  maf: { name: "Caudalímetro o fuga de admisión", systems: ["combustion"], urgency: "media", desc: "La medición de aire podría ser incorrecta o existir una fuga en la admisión." },
  injectors: { name: "Inyectores sucios o defectuosos", systems: ["combustion"], urgency: "media", desc: "Uno o más cilindros podrían no estar recibiendo el combustible adecuado." },
  turbo: { name: "Turbo, actuador o manguito de presión", systems: ["turbo"], urgency: "alta", desc: "Puede existir una fuga de presión, un actuador defectuoso o desgaste del turbo." },
  coolant: { name: "Fuga de refrigerante", systems: ["combustion", "hybrid", "phev", "electric"], urgency: "alta", desc: "El circuito puede estar perdiendo refrigerante por un manguito, radiador o junta." },
  thermostat: { name: "Termostato defectuoso", systems: ["combustion", "hybrid", "phev"], urgency: "alta", desc: "El termostato podría no regular correctamente el paso del refrigerante." },
  waterpump: { name: "Bomba de agua o circulación", systems: ["combustion", "hybrid", "phev"], urgency: "alta", desc: "La circulación insuficiente de refrigerante puede provocar sobrecalentamiento." },
  clutch: { name: "Embrague o volante bimasa", systems: ["manual"], urgency: "media", desc: "El embrague puede estar desgastado o el volante bimasa presentar holgura." },
  transmission: { name: "Transmisión o soportes", systems: ["automatic", "manual"], urgency: "media", desc: "La caja, el embrague o sus soportes pueden transmitir golpes o vibraciones." },
  bearing: { name: "Rodamiento de rueda", systems: ["all"], urgency: "media", desc: "Un rodamiento desgastado suele producir un zumbido que aumenta con la velocidad." },
  balance: { name: "Neumáticos, equilibrado o alineación", systems: ["all"], urgency: "media", desc: "El estado de las ruedas puede provocar vibraciones o desvíos." },
  brakes: { name: "Frenos desgastados o deformados", systems: ["all"], urgency: "alta", desc: "Pastillas, discos o componentes de freno requieren una revisión prioritaria." },
  sensor: { name: "Sensor o conexión eléctrica", systems: ["all"], urgency: "media", desc: "Un sensor, conector o cableado puede estar generando una lectura incoherente." },
  tractionBattery: { name: "Batería de tracción o gestión de alto voltaje", systems: ["electric", "hybrid", "phev"], urgency: "alta", desc: "El sistema de alto voltaje necesita diagnóstico especializado; no debe manipularse." }
};

const FLOWS = {
  start: [
    { q: "¿Qué ocurre al pulsar el arranque?", a: [
      ["No hace nada", { battery: 3, starter: 3, sensor: 1 }],
      ["Se oye un clic", { battery: 3, starter: 4 }],
      ["Gira lento", { battery: 5, alternator: 2 }],
      ["Gira normal, pero no arranca", { fuel: 4, coils: 3, glow: 2, sensor: 2 }]
    ]},
    { q: "¿Las luces pierden intensidad al intentarlo?", a: [
      ["Sí, mucho", { battery: 5, alternator: 2 }], ["No", { starter: 2, fuel: 2, sensor: 1 }], ["No me he fijado", {}]
    ]},
    { q: "¿Sucede principalmente con el motor frío?", a: [
      ["Sí", { glow: 5, battery: 2, fuel: 1 }], ["No, también en caliente", { starter: 2, fuel: 3, sensor: 2 }], ["Es la primera vez", { battery: 2 }]
    ]},
    { q: "¿Apareció algún aviso antes del fallo?", a: [
      ["Aviso de batería", { alternator: 6, battery: 2 }], ["Aviso de motor", { fuel: 2, coils: 2, sensor: 3 }], ["Ninguno", { battery: 1, starter: 1 }], ["No lo sé", {}]
    ]}
  ],
  power: [
    { q: "¿Cuándo notas más la pérdida de potencia?", a: [
      ["Al acelerar fuerte", { turbo: 5, fuel: 3, maf: 3 }], ["A bajas revoluciones", { egr: 5, coils: 3, injectors: 2 }], ["Todo el tiempo", { dpf: 3, maf: 3, fuel: 2 }], ["Solo a veces", { sensor: 2, coils: 2, turbo: 2 }]
    ]},
    { q: "¿El motor da tirones?", a: [
      ["Sí, fuertes", { coils: 5, injectors: 4, fuel: 2 }], ["Sí, leves", { egr: 3, maf: 3, lambda: 2 }], ["No, solo no acelera", { turbo: 4, dpf: 3, fuel: 2 }]
    ]},
    { q: "¿Ha aumentado el consumo?", a: [
      ["Sí", { lambda: 5, maf: 3, injectors: 3, dpf: 2 }], ["No", { turbo: 2, fuel: 1 }], ["No lo sé", {}]
    ]},
    { q: "¿Hay humo al acelerar?", a: [
      ["Negro", { egr: 4, dpf: 3, injectors: 3, maf: 2 }], ["Azulado", { turbo: 5 }], ["Blanco", { injectors: 3, coolant: 2 }], ["No", { coils: 2, sensor: 2, fuel: 1 }]
    ]}
  ],
  warning: [
    { q: "¿Qué testigo se ha encendido?", a: [
      ["Motor amarillo", { sensor: 3, lambda: 3, egr: 3, dpf: 2 }], ["Batería rojo", { alternator: 7, battery: 2 }], ["Temperatura", { coolant: 5, thermostat: 4, waterpump: 4 }], ["Frenos / ABS", { brakes: 6, sensor: 3 }]
    ]},
    { q: "¿El testigo está fijo o parpadea?", a: [
      ["Fijo", { sensor: 2, lambda: 2, egr: 2 }], ["Parpadea", { coils: 5, injectors: 3, dpf: 2 }], ["Se apagó", { sensor: 2 }]
    ]},
    { q: "¿Notas un cambio al conducir?", a: [
      ["Pérdida de potencia", { dpf: 4, turbo: 4, egr: 3 }], ["Tirones", { coils: 4, injectors: 3, maf: 2 }], ["Temperatura alta", { coolant: 4, thermostat: 4 }], ["Conduce normal", { sensor: 3, lambda: 2 }]
    ]},
    { q: "¿Tienes un código OBD leído?", a: [
      ["Sí, pero no lo recuerdo", { sensor: 1 }], ["No", {}], ["No sé qué es", {}]
    ]}
  ],
  smoke: [
    { q: "¿De qué color es el humo?", a: [
      ["Negro", { egr: 5, injectors: 4, maf: 3, dpf: 2 }], ["Azul", { turbo: 5, injectors: 2 }], ["Blanco denso", { coolant: 5, injectors: 3 }], ["No veo humo, solo olor", { lambda: 3, fuel: 2, brakes: 2 }]
    ]},
    { q: "¿Cuándo aparece?", a: [
      ["Al acelerar", { turbo: 4, injectors: 3, egr: 2 }], ["Al arrancar en frío", { glow: 3, injectors: 2 }], ["Continuamente", { coolant: 4, lambda: 2 }], ["Después de un trayecto", { dpf: 3, brakes: 2 }]
    ]},
    { q: "¿Ha bajado algún líquido?", a: [
      ["Refrigerante", { coolant: 7, waterpump: 3 }], ["Aceite", { turbo: 5 }], ["Ninguno", { egr: 2, lambda: 2, injectors: 2 }], ["No lo he comprobado", {}]
    ]},
    { q: "¿Notas pérdida de potencia?", a: [
      ["Sí", { turbo: 3, dpf: 3, egr: 3 }], ["No", { lambda: 2, injectors: 1 }], ["Muy poca", { maf: 2, egr: 2 }]
    ]}
  ],
  heat: [
    { q: "¿La temperatura entra en la zona roja?", a: [
      ["Sí", { coolant: 5, waterpump: 5, thermostat: 4 }], ["Sube más de lo normal", { thermostat: 4, coolant: 3 }], ["Solo aparece un aviso", { sensor: 4, coolant: 2 }]
    ]},
    { q: "¿Ves líquido bajo el coche?", a: [
      ["Sí", { coolant: 7, waterpump: 2 }], ["No", { thermostat: 3, waterpump: 2, sensor: 2 }], ["No lo sé", {}]
    ]},
    { q: "¿La calefacción deja de expulsar aire caliente?", a: [
      ["Sí", { coolant: 5, waterpump: 3 }], ["No", { thermostat: 3, sensor: 2 }], ["No lo he probado", {}]
    ]},
    { q: "¿Ocurre más en ciudad o parado?", a: [
      ["Sí", { sensor: 2, coolant: 3 }], ["También en carretera", { waterpump: 4, thermostat: 4, coolant: 3 }], ["No estoy seguro", {}]
    ]}
  ],
  noise: [
    { q: "¿Cuándo aparece el ruido o vibración?", a: [
      ["Al frenar", { brakes: 7 }], ["A cierta velocidad", { balance: 5, bearing: 4 }], ["Al cambiar de marcha", { clutch: 5, transmission: 4 }], ["Con el motor al ralentí", { transmission: 2, injectors: 2 }]
    ]},
    { q: "¿Cambia al girar el volante?", a: [
      ["Sí", { bearing: 6 }], ["No", { balance: 2, brakes: 2, transmission: 2 }], ["No lo sé", {}]
    ]},
    { q: "¿Dónde lo notas principalmente?", a: [
      ["En el volante", { balance: 5, brakes: 4 }], ["En los pedales", { clutch: 4, brakes: 3 }], ["En todo el coche", { balance: 3, transmission: 3 }], ["Es un zumbido", { bearing: 6 }]
    ]},
    { q: "¿Empeora al aumentar la velocidad?", a: [
      ["Sí", { bearing: 4, balance: 4 }], ["No", { clutch: 3, transmission: 3 }], ["Solo al frenar", { brakes: 6 }]
    ]}
  ]
};

const state = loadState();
let currentView = "home";
let selectedVehicleId = state.vehicles[0]?.id || null;
let diagnosis = null;

const main = document.querySelector("#main");
const sheet = document.querySelector("#sheet");
const sheetContent = document.querySelector("#sheetContent");
const toast = document.querySelector("#toast");

function loadState() {
  try {
    return JSON.parse(localStorage.getItem("motorclaro-state")) || { profile: { name: "" }, vehicles: [], maintenance: {} };
  } catch {
    return { profile: { name: "" }, vehicles: [], maintenance: {} };
  }
}

function saveState() {
  localStorage.setItem("motorclaro-state", JSON.stringify(state));
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>'"]/g, char => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function greeting() {
  const hour = new Date().getHours();
  return hour < 12 ? "Buenos días" : hour < 20 ? "Buenas tardes" : "Buenas noches";
}

function vehicleName(v) {
  return `${v.brand} ${v.model}`;
}

function vehicleDetails(v) {
  return `${v.year} · ${FUELS[v.fuel]} · ${v.power || "—"} CV · ${v.transmission === "manual" ? "Manual" : "Automático"}`;
}

function selectedVehicle() {
  return state.vehicles.find(v => v.id === selectedVehicleId) || state.vehicles[0] || null;
}

function setView(view) {
  currentView = view;
  document.querySelectorAll(".nav-item").forEach(item => item.classList.toggle("active", item.dataset.view === view));
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function render() {
  document.querySelector("#profileButton").textContent = (state.profile.name || "T").slice(0, 1).toUpperCase();
  if (currentView === "home") renderHome();
  if (currentView === "garage") renderGarage();
  if (currentView === "diagnosis") renderDiagnosis();
  if (currentView === "maintenance") renderMaintenance();
}

function renderHome() {
  const cars = state.vehicles.slice(0, 2);
  main.innerHTML = `
    <section class="hero">
      <div class="status-pill">Listo para ayudarte</div>
      <p class="eyebrow">${greeting()}</p>
      <h1>${state.profile.name ? escapeHtml(state.profile.name) : "Tu coche, más claro."}</h1>
      <p class="hero-copy">Entiende qué le pasa, controla su mantenimiento y guarda todo en un mismo lugar.</p>
    </section>
    <section class="quick-grid">
      <button class="quick-card primary" data-action="diagnose">
        <span class="quick-icon">✦</span><strong>Revisar un problema</strong><small>Diagnóstico guiado en pocos pasos</small>
      </button>
      <button class="quick-card" data-action="add-car">
        <span class="quick-icon">＋</span><strong>Añadir coche</strong><small>Configura tu garaje</small>
      </button>
    </section>
    <div class="section-head"><div><h2>Tu garaje</h2><p class="muted">${state.vehicles.length} ${state.vehicles.length === 1 ? "vehículo" : "vehículos"}</p></div><button class="text-button" data-action="garage">Ver todos</button></div>
    ${cars.length ? `<div class="car-list">${cars.map(carCard).join("")}</div>` : emptyGarage()}
    <div class="notice"><span>⚠</span><div><strong>Orientación, no diagnóstico definitivo</strong>Si hay un testigo rojo, frenos deficientes, humo intenso o sobrecalentamiento, detén el vehículo en un lugar seguro.</div></div>
  `;
  bindCommonActions();
}

function carCard(v) {
  return `<button class="car-card" data-vehicle="${v.id}"><span class="car-icon">▰</span><span><strong>${escapeHtml(vehicleName(v))}</strong><small>${escapeHtml(vehicleDetails(v))}</small></span><span class="chevron">›</span></button>`;
}

function emptyGarage() {
  return `<div class="empty-card"><div class="empty-icon">◇</div><h3>Tu garaje está vacío</h3><p class="muted">Añade un coche para personalizar diagnósticos y mantenimiento.</p><button class="button" data-action="add-car">Añadir mi primer coche</button></div>`;
}

function renderGarage() {
  main.innerHTML = `
    <p class="eyebrow">Tus vehículos</p><h1>Garaje</h1>
    <p class="hero-copy">Los datos del coche filtran automáticamente preguntas y averías incompatibles.</p>
    <div class="section-head"><div><h2>${state.vehicles.length || "Sin"} ${state.vehicles.length === 1 ? "coche" : "coches"}</h2></div></div>
    ${state.vehicles.length ? `<div class="car-list">${state.vehicles.map(carCard).join("")}</div><button class="floating-add" data-action="add-car">＋ Añadir otro coche</button>` : emptyGarage()}
  `;
  bindCommonActions();
}

function renderDiagnosis() {
  const car = selectedVehicle();
  if (!car) {
    main.innerHTML = `<p class="eyebrow">Asistente</p><h1>Diagnóstico</h1><div class="empty-card" style="margin-top:24px"><div class="empty-icon">◇</div><h3>Primero añade tu coche</h3><p class="muted">Así descartamos preguntas y averías que no corresponden a tu vehículo.</p><button class="button" data-action="add-car">Añadir coche</button></div>`;
    bindCommonActions();
    return;
  }
  if (diagnosis?.finished) return renderResults();
  if (diagnosis?.symptom) return renderQuestion();

  main.innerHTML = `
    <section class="diag-intro">
      <div class="vehicle-chip">▰ ${escapeHtml(vehicleName(car))} · ${escapeHtml(String(car.year))}</div>
      <h1>¿Qué notas?</h1><p>Elige el síntoma principal. Te haré solo las preguntas útiles para este coche.</p>
    </section>
    <div class="section-head"><div><h2>Síntoma principal</h2><p>Podrás empezar de nuevo en cualquier momento.</p></div></div>
    <div class="symptom-grid">${SYMPTOMS.map(s => `<button class="symptom-card" data-symptom="${s.id}"><span>${s.icon}</span><strong>${s.label}</strong></button>`).join("")}</div>
    <button class="text-button" style="margin-top:18px" data-action="change-car">Cambiar de vehículo</button>
  `;
  main.querySelectorAll("[data-symptom]").forEach(btn => btn.addEventListener("click", () => {
    diagnosis = { symptom: btn.dataset.symptom, index: 0, scores: {}, answers: [], finished: false };
    renderDiagnosis();
  }));
  main.querySelector("[data-action='change-car']")?.addEventListener("click", openVehiclePicker);
}

function renderQuestion() {
  const flow = FLOWS[diagnosis.symptom];
  const item = flow[diagnosis.index];
  const progress = ((diagnosis.index + 1) / flow.length) * 100;
  main.innerHTML = `
    <button class="text-button" data-action="cancel-diag">‹ Salir del diagnóstico</button>
    <div class="progress-track"><div class="progress-bar" style="width:${progress}%"></div></div>
    <span class="question-count">PREGUNTA ${diagnosis.index + 1} DE ${flow.length}</span>
    <h2 class="question-title">${item.q}</h2>
    <div class="answer-list">${item.a.map((answer, i) => `<button class="answer" data-answer="${i}">${answer[0]}</button>`).join("")}</div>
  `;
  main.querySelector("[data-action='cancel-diag']").addEventListener("click", () => { diagnosis = null; renderDiagnosis(); });
  main.querySelectorAll("[data-answer]").forEach(btn => btn.addEventListener("click", () => {
    const answer = item.a[Number(btn.dataset.answer)];
    Object.entries(answer[1]).forEach(([fault, points]) => diagnosis.scores[fault] = (diagnosis.scores[fault] || 0) + points);
    diagnosis.answers.push({ question: item.q, answer: answer[0] });
    if (diagnosis.index >= flow.length - 1) diagnosis.finished = true;
    else diagnosis.index += 1;
    renderDiagnosis();
  }));
}

function applicability(car) {
  const combustion = car.fuel !== "electric";
  const tags = new Set(["all", car.fuel, car.transmission]);
  if (combustion) tags.add("combustion");
  if (car.fuel !== "electric" && car.turbo !== "no") tags.add("turbo");
  return tags;
}

function getResults() {
  const car = selectedVehicle();
  const tags = applicability(car);
  return Object.entries(diagnosis.scores)
    .filter(([key]) => FAULTS[key] && FAULTS[key].systems.some(tag => tags.has(tag)))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([key, score], index, arr) => {
      const max = Math.max(arr[0]?.[1] || 1, 1);
      const match = Math.min(92, Math.round(38 + (score / max) * 48 - index * 5));
      return { key, score, match, ...FAULTS[key] };
    });
}

function renderResults() {
  let results = getResults();
  if (!results.length) results = [{ key: "sensor", match: 44, ...FAULTS.sensor }];
  main.innerHTML = `
    <p class="eyebrow">Resultado orientativo</p><h1>Las 3 causas que más encajan</h1>
    <p class="hero-copy">Coincidencia calculada con tus respuestas y la configuración de ${escapeHtml(vehicleName(selectedVehicle()))}.</p>
    <div style="margin-top:24px">${results.map((r, i) => `
      <article class="result-card"><div class="result-top"><div><p class="eyebrow">${i + 1}ª POSIBILIDAD</p><h3>${r.name}</h3></div><div class="match">${r.match}%</div></div>
      <p>${r.desc}</p><span class="urgency ${r.urgency === "alta" ? "high" : ""}">Prioridad ${r.urgency}</span></article>
    `).join("")}</div>
    <div class="notice"><span>ℹ</span><div><strong>Qué significa el porcentaje</strong>Es un nivel de coincidencia entre tus respuestas y las causas conocidas; no confirma la avería ni sustituye una revisión.</div></div>
    <div class="button-row"><button class="button ghost" data-action="restart">Empezar de nuevo</button><button class="button" data-action="save-result">Guardar resultado</button></div>
  `;
  main.querySelector("[data-action='restart']").addEventListener("click", () => { diagnosis = null; renderDiagnosis(); });
  main.querySelector("[data-action='save-result']").addEventListener("click", () => {
    const car = selectedVehicle();
    car.lastDiagnosis = { date: new Date().toISOString(), results: results.map(r => ({ name: r.name, match: r.match })) };
    saveState(); showToast("Resultado guardado en el vehículo");
  });
}

function maintenanceItems(car) {
  const combustion = car.fuel !== "electric";
  const items = [
    ["tyres", "Neumáticos y presiones", "Cada mes y antes de un viaje"],
    ["brakes", "Frenos", "Inspección cada 15.000–30.000 km"],
    ["brakefluid", "Líquido de frenos", "Habitualmente cada 2 años"],
    ["cabin", "Filtro del habitáculo", "Cada 15.000–30.000 km o 1 año"]
  ];
  if (combustion) items.unshift(["oil", "Aceite y filtro", "Según motor: normalmente 15.000–30.000 km o 1 año"]);
  if (combustion) items.push(["air", "Filtro de aire", "Habitualmente cada 30.000–60.000 km"]);
  if (car.fuel === "diesel") items.push(["fuelfilter", "Filtro de combustible diésel", "Habitualmente cada 30.000–60.000 km"]);
  if (["gasoline", "hybrid", "phev"].includes(car.fuel)) items.push(["spark", "Bujías", "Según tipo: aproximadamente 30.000–90.000 km"]);
  if (combustion) items.push(["timing", "Distribución", "Confirmar correa/cadena y plazo exacto del motor"]);
  if (car.transmission === "automatic") items.push(["gearbox", "Aceite de caja automática", "Según caja: frecuentemente 60.000–120.000 km"]);
  if (["electric", "hybrid", "phev"].includes(car.fuel)) items.push(["hv", "Sistema de alto voltaje", "Inspección profesional según fabricante"]);
  return items;
}

function renderMaintenance() {
  const car = selectedVehicle();
  if (!car) {
    main.innerHTML = `<p class="eyebrow">Cuidados</p><h1>Mantenimiento</h1><div class="empty-card" style="margin-top:24px"><h3>Añade un coche para ver su plan</h3><p class="muted">El mantenimiento cambia según combustible, motor y transmisión.</p><button class="button" data-action="add-car">Añadir coche</button></div>`;
    bindCommonActions(); return;
  }
  const checks = state.maintenance[car.id] || {};
  main.innerHTML = `
    <p class="eyebrow">Plan orientativo</p><h1>Mantenimiento</h1>
    <p class="hero-copy">Una guía personalizada por tipo de vehículo. Los intervalos exactos se verificarán por código de motor.</p>
    <div class="vehicle-tabs" style="margin-top:22px">${state.vehicles.map(v => `<button class="vehicle-tab ${v.id === car.id ? "active" : ""}" data-maint-car="${v.id}">${escapeHtml(vehicleName(v))}</button>`).join("")}</div>
    <div class="section-head"><div><h2>${escapeHtml(vehicleName(car))}</h2><p>${escapeHtml(vehicleDetails(car))}</p></div></div>
    ${maintenanceItems(car).map(item => `<article class="maint-card"><button class="maint-check ${checks[item[0]] ? "done" : ""}" data-maint="${item[0]}">${checks[item[0]] ? "✓" : "○"}</button><div><strong>${item[1]}</strong><small>${item[2]}</small></div><span class="maint-tag">${checks[item[0]] ? "HECHO" : "REVISAR"}</span></article>`).join("")}
    <div class="notice"><span>⚙</span><div><strong>Intervalos por verificar</strong>Esta primera versión usa rangos generales seguros. No sustituye el plan oficial específico del código de motor.</div></div>
  `;
  main.querySelectorAll("[data-maint-car]").forEach(btn => btn.addEventListener("click", () => { selectedVehicleId = btn.dataset.maintCar; renderMaintenance(); }));
  main.querySelectorAll("[data-maint]").forEach(btn => btn.addEventListener("click", () => {
    state.maintenance[car.id] ||= {};
    state.maintenance[car.id][btn.dataset.maint] = !state.maintenance[car.id][btn.dataset.maint];
    saveState(); renderMaintenance();
  }));
}

function bindCommonActions() {
  main.querySelectorAll("[data-action='add-car']").forEach(btn => btn.addEventListener("click", openCarForm));
  main.querySelector("[data-action='diagnose']")?.addEventListener("click", () => setView("diagnosis"));
  main.querySelector("[data-action='garage']")?.addEventListener("click", () => setView("garage"));
  main.querySelectorAll("[data-vehicle]").forEach(btn => btn.addEventListener("click", () => openCarDetails(btn.dataset.vehicle)));
}

function openSheet(html) {
  sheetContent.innerHTML = html;
  sheet.classList.remove("hidden");
}

function closeSheet() { sheet.classList.add("hidden"); }

function openProfile() {
  openSheet(`<h2>Tu perfil</h2><p class="muted">Usamos tu nombre solo para personalizar la app. Se guarda en este dispositivo.</p><form id="profileForm" class="form-grid"><label class="field"><span>¿Cómo quieres que te llame?</span><input name="name" maxlength="24" value="${escapeHtml(state.profile.name)}" placeholder="Tu nombre" autofocus></label><div class="button-row"><button type="button" class="button ghost" data-close>Cancelar</button><button class="button">Guardar</button></div></form>`);
  sheetContent.querySelector("[data-close]").addEventListener("click", closeSheet);
  sheetContent.querySelector("#profileForm").addEventListener("submit", event => {
    event.preventDefault(); state.profile.name = new FormData(event.target).get("name").trim(); saveState(); closeSheet(); render(); showToast("Perfil guardado");
  });
}

function openCarForm() {
  const brands = Object.keys(VEHICLES);
  openSheet(`
    <h2>Añadir vehículo</h2><p class="muted">Cuanto más preciso seas, mejor filtraremos los resultados.</p>
    <form id="carForm" class="form-grid">
      <div class="two-cols form-grid">
        <label class="field"><span>Marca</span><select name="brand" id="brandSelect">${brands.map(b => `<option>${b}</option>`).join("")}</select></label>
        <label class="field"><span>Modelo</span><select name="model" id="modelSelect"></select></label>
      </div>
      <div class="two-cols form-grid">
        <label class="field"><span>Año</span><select name="year" id="yearSelect"></select></label>
        <label class="field"><span>Combustible</span><select name="fuel">${Object.entries(FUELS).map(([key, value]) => `<option value="${key}">${value}</option>`).join("")}</select></label>
      </div>
      <div class="two-cols form-grid">
        <label class="field"><span>Potencia (CV)</span><input required name="power" inputmode="numeric" type="number" min="30" max="1000" placeholder="Ej. 110"></label>
        <label class="field"><span>Cambio</span><select name="transmission"><option value="manual">Manual</option><option value="automatic">Automático</option></select></label>
      </div>
      <label class="field"><span>¿Lleva turbo?</span><select name="turbo"><option value="yes">Sí</option><option value="no">No / atmosférico</option><option value="unknown">No lo sé</option></select></label>
      <label class="field"><span>Código de motor (opcional)</span><input name="engineCode" maxlength="20" placeholder="Ej. CRKB"></label>
      <label class="field"><span>Kilometraje actual</span><input required name="mileage" inputmode="numeric" type="number" min="0" max="2000000" placeholder="Ej. 126000"></label>
      <div class="button-row"><button type="button" class="button ghost" data-close>Cancelar</button><button class="button">Guardar coche</button></div>
    </form>`);
  const brand = sheetContent.querySelector("#brandSelect");
  const model = sheetContent.querySelector("#modelSelect");
  const year = sheetContent.querySelector("#yearSelect");
  const updateYears = () => {
    const [min, max] = VEHICLES[brand.value][model.value];
    year.innerHTML = Array.from({ length: max - min + 1 }, (_, i) => max - i).map(y => `<option>${y}</option>`).join("");
  };
  const updateModels = () => { model.innerHTML = Object.keys(VEHICLES[brand.value]).map(m => `<option>${m}</option>`).join(""); updateYears(); };
  brand.addEventListener("change", updateModels); model.addEventListener("change", updateYears); updateModels();
  sheetContent.querySelector("[data-close]").addEventListener("click", closeSheet);
  sheetContent.querySelector("#carForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const car = { id: crypto.randomUUID?.() || String(Date.now()), ...data, year: Number(data.year), power: Number(data.power), mileage: Number(data.mileage) };
    state.vehicles.push(car); selectedVehicleId = car.id; saveState(); closeSheet(); render(); showToast("Coche añadido al garaje");
  });
}

function openCarDetails(id) {
  const car = state.vehicles.find(v => v.id === id); if (!car) return;
  openSheet(`<p class="eyebrow">En tu garaje</p><h2>${escapeHtml(vehicleName(car))}</h2><p class="muted">${escapeHtml(vehicleDetails(car))}</p><div class="selector-list"><div class="selector-card"><strong>${car.mileage.toLocaleString("es-ES")} km</strong><small>Kilometraje registrado</small></div>${car.engineCode ? `<div class="selector-card"><strong>${escapeHtml(car.engineCode)}</strong><small>Código de motor</small></div>` : ""}${car.lastDiagnosis ? `<div class="selector-card"><strong>${escapeHtml(car.lastDiagnosis.results[0].name)}</strong><small>Último diagnóstico · ${car.lastDiagnosis.results[0].match}% de coincidencia</small></div>` : ""}</div><div class="button-row"><button class="button lime" data-diagnose-car>Diagnosticar</button><button class="button ghost" data-maintenance-car>Mantenimiento</button></div><button class="button danger" style="margin-top:10px" data-delete-car>Eliminar del garaje</button>`);
  sheetContent.querySelector("[data-diagnose-car]").addEventListener("click", () => { selectedVehicleId = id; diagnosis = null; closeSheet(); setView("diagnosis"); });
  sheetContent.querySelector("[data-maintenance-car]").addEventListener("click", () => { selectedVehicleId = id; closeSheet(); setView("maintenance"); });
  sheetContent.querySelector("[data-delete-car]").addEventListener("click", () => {
    if (!confirm(`¿Eliminar ${vehicleName(car)} del garaje?`)) return;
    state.vehicles = state.vehicles.filter(v => v.id !== id); delete state.maintenance[id]; selectedVehicleId = state.vehicles[0]?.id || null; saveState(); closeSheet(); render(); showToast("Coche eliminado");
  });
}

function openVehiclePicker() {
  openSheet(`<h2>Selecciona un vehículo</h2><p class="muted">El diagnóstico se adaptará a su configuración.</p><div class="selector-list">${state.vehicles.map(v => `<button class="selector-card ${v.id === selectedVehicleId ? "active" : ""}" data-pick="${v.id}"><strong>${escapeHtml(vehicleName(v))}</strong><small>${escapeHtml(vehicleDetails(v))}</small></button>`).join("")}</div>`);
  sheetContent.querySelectorAll("[data-pick]").forEach(btn => btn.addEventListener("click", () => { selectedVehicleId = btn.dataset.pick; diagnosis = null; closeSheet(); renderDiagnosis(); }));
}

function showToast(message) {
  toast.textContent = message; toast.classList.remove("hidden"); clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.add("hidden"), 2200);
}

document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => setView(item.dataset.view)));
document.querySelector("[data-go='home']").addEventListener("click", () => setView("home"));
document.querySelector("#profileButton").addEventListener("click", openProfile);
sheet.addEventListener("click", event => { if (event.target === sheet) closeSheet(); });

if ("serviceWorker" in navigator) window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));

render();
if (!state.profile.name) setTimeout(openProfile, 350);
