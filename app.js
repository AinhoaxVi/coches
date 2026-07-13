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

// Las variantes verificadas sustituyen la configuración genérica cuando existe
// una ficha técnica concreta. El resto de modelos sigue admitiendo alta manual.
const VARIANTS = [
  { id: "i30-nl-14-140-m", brand: "Hyundai", model: "i30", years: [2018, 2020], generation: "PD · N Line", engine: "1.4 T-GDi 140 CV", fuel: "gasoline", power: 140, transmission: "manual", gearbox: "6MT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "catalyst", "timingChain", "startStop"] },
  { id: "i30-nl-14-140-d", brand: "Hyundai", model: "i30", years: [2018, 2020], generation: "PD · N Line", engine: "1.4 T-GDi 140 CV", fuel: "gasoline", power: 140, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "catalyst", "timingChain", "startStop", "dct"] },
  { id: "i30-nl-16-136-m", brand: "Hyundai", model: "i30", years: [2018, 2020], generation: "PD · N Line", engine: "1.6 CRDi 136 CV", fuel: "diesel", power: 136, transmission: "manual", gearbox: "6MT", turbo: "yes", tech: ["commonRail", "turbo", "egr", "dpf", "scr", "adblue", "timingChain", "startStop"] },
  { id: "i30-nl-16-136-d", brand: "Hyundai", model: "i30", years: [2018, 2020], generation: "PD · N Line", engine: "1.6 CRDi 136 CV", fuel: "diesel", power: 136, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["commonRail", "turbo", "egr", "dpf", "scr", "adblue", "timingChain", "startStop", "dct"] },
  { id: "i30-nl-10-120-mhev-m", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.0 T-GDi 120 CV 48V", fuel: "gasoline", power: 120, transmission: "manual", gearbox: "6iMT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "gpf", "timingChain", "mhev48", "mhsg", "dcDc", "startStop"] },
  { id: "i30-nl-10-120-mhev-d", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.0 T-GDi 120 CV 48V", fuel: "gasoline", power: 120, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "gpf", "timingChain", "mhev48", "mhsg", "dcDc", "startStop", "dct"] },
  { id: "i30-nl-15-160-mhev-m", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.5 T-GDi 160 CV 48V", fuel: "gasoline", power: 160, transmission: "manual", gearbox: "6iMT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "gpf", "timingChain", "mhev48", "mhsg", "dcDc", "startStop"] },
  { id: "i30-nl-15-160-mhev-d", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.5 T-GDi 160 CV 48V", fuel: "gasoline", power: 160, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "gpf", "timingChain", "mhev48", "mhsg", "dcDc", "startStop", "dct"] },
  { id: "i30-nl-16-136-mhev-m", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.6 CRDi 136 CV 48V", fuel: "diesel", power: 136, transmission: "manual", gearbox: "6iMT", turbo: "yes", tech: ["commonRail", "turbo", "egr", "dpf", "scr", "adblue", "timingChain", "mhev48", "mhsg", "dcDc", "startStop"] },
  { id: "i30-nl-16-136-mhev-d", brand: "Hyundai", model: "i30", years: [2021, 2024], generation: "PD restyling · N Line", engine: "1.6 CRDi 136 CV 48V", fuel: "diesel", power: 136, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["commonRail", "turbo", "egr", "dpf", "scr", "adblue", "timingChain", "mhev48", "mhsg", "dcDc", "startStop", "dct"] },
  { id: "i30-nl-15-140-d", brand: "Hyundai", model: "i30", years: [2025, 2026], generation: "PD restyling II · N Line", engine: "1.5 T-GDi 140 CV", fuel: "gasoline", power: 140, transmission: "automatic", gearbox: "7DCT", turbo: "yes", tech: ["directInjection", "turbo", "lambda", "gpf", "timingChain", "startStop", "dct"] }
];

const COMPONENT_LABELS = {
  directInjection: "Inyección directa de gasolina", commonRail: "Inyección diésel common-rail",
  turbo: "Turbo e intercooler", lambda: "Sondas lambda", catalyst: "Catalizador",
  gpf: "Filtro de partículas de gasolina (GPF)", egr: "Válvula EGR", dpf: "Filtro de partículas diésel (DPF)",
  scr: "Catalizador SCR", adblue: "Sistema AdBlue", timingChain: "Distribución por cadena",
  startStop: "Start/Stop", dct: "Cambio de doble embrague 7DCT", mhev48: "Batería híbrida de 48 V",
  mhsg: "Motor-generador MHSG", dcDc: "Convertidor DC/DC", abs: "ABS y control de estabilidad",
  eps: "Dirección asistida eléctrica", ac: "Climatización", tpms: "Control de presión de neumáticos"
};

const SYMPTOMS = [
  { id: "start", icon: "◉", label: "No arranca o le cuesta" },
  { id: "power", icon: "↗", label: "Pierde potencia o da tirones" },
  { id: "warning", icon: "!", label: "Testigo encendido" },
  { id: "smoke", icon: "≋", label: "Humo u olor extraño" },
  { id: "heat", icon: "♨", label: "Se calienta demasiado" },
  { id: "noise", icon: "≈", label: "Ruido o vibración" },
  { id: "braking", icon: "⊘", label: "Frenos o pedal" },
  { id: "steering", icon: "◌", label: "Dirección o estabilidad" },
  { id: "climate", icon: "❄", label: "Climatización" },
  { id: "leak", icon: "⌁", label: "Fuga o mancha" },
  { id: "gearbox", icon: "⇄", label: "Cambio o embrague" },
  { id: "electric48", icon: "ϟ", label: "Sistema eléctrico / 48 V" }
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
  tractionBattery: { name: "Batería de tracción o gestión de alto voltaje", systems: ["electric", "hybrid", "phev"], urgency: "alta", desc: "El sistema de alto voltaje necesita diagnóstico especializado; no debe manipularse." },
  brakePads: { name: "Pastillas de freno desgastadas", systems: ["all"], urgency: "alta", desc: "El material de fricción puede estar cerca de su límite o haber llegado al avisador." },
  brakeDiscs: { name: "Discos de freno deformados o gastados", systems: ["all"], urgency: "alta", desc: "La vibración al frenar suele relacionarse con discos deformados o desgaste irregular." },
  brakeCaliper: { name: "Pinza de freno agarrotada", systems: ["all"], urgency: "alta", desc: "Una pinza puede quedarse frenada, calentar una rueda y desviar el vehículo." },
  absSensor: { name: "Sensor ABS o aro reluctor", systems: ["all"], urgency: "alta", desc: "Un captador de rueda o su cableado puede desactivar ABS y control de estabilidad." },
  brakeFluid: { name: "Líquido de frenos bajo o degradado", systems: ["all"], urgency: "alta", desc: "Un pedal esponjoso o un nivel bajo requiere revisión inmediata del circuito." },
  brakeBooster: { name: "Servofreno o bomba de vacío", systems: ["combustion"], urgency: "alta", desc: "La asistencia puede ser insuficiente y endurecer notablemente el pedal." },
  alignment: { name: "Alineación fuera de tolerancia", systems: ["all"], urgency: "media", desc: "El coche puede desviarse y desgastar los neumáticos de forma irregular." },
  tieRod: { name: "Rótula o terminal de dirección", systems: ["all"], urgency: "alta", desc: "Una holgura de dirección puede producir golpes, imprecisión y desgaste de neumáticos." },
  controlArm: { name: "Silentblock o brazo de suspensión", systems: ["all"], urgency: "media", desc: "El caucho o una rótula de suspensión puede tener holgura y transmitir golpes." },
  shock: { name: "Amortiguador o copela", systems: ["all"], urgency: "media", desc: "Un amortiguador con fuga o una copela dañada reduce estabilidad y confort." },
  eps: { name: "Dirección asistida eléctrica (EPS)", systems: ["all"], urgency: "alta", desc: "La asistencia eléctrica, su sensor de par o alimentación pueden estar fallando." },
  tyreDamage: { name: "Neumático deformado o dañado", systems: ["all"], urgency: "alta", desc: "Una deformación, presión incorrecta o daño interno puede causar vibración e inestabilidad." },
  acGas: { name: "Fuga o carga baja de refrigerante A/C", systems: ["all"], urgency: "baja", desc: "El circuito de climatización puede haber perdido refrigerante por una fuga." },
  acCompressor: { name: "Compresor o embrague del aire acondicionado", systems: ["all"], urgency: "media", desc: "El compresor puede no acoplar, no generar presión o producir ruido." },
  blower: { name: "Ventilador interior o resistencia", systems: ["all"], urgency: "baja", desc: "El ventilador, regulador o su alimentación pueden impedir el flujo de aire." },
  blendDoor: { name: "Trampilla o actuador de climatización", systems: ["all"], urgency: "baja", desc: "Un actuador puede impedir mezclar o dirigir el aire correctamente." },
  cabinFilter: { name: "Filtro de habitáculo obstruido", systems: ["all"], urgency: "baja", desc: "Un filtro saturado reduce mucho el caudal y favorece olores o empañamiento." },
  oilLeak: { name: "Fuga de aceite de motor", systems: ["combustion"], urgency: "alta", desc: "Juntas, retenes, tapa o cárter pueden estar perdiendo aceite." },
  gearboxLeak: { name: "Fuga de aceite de transmisión", systems: ["manual", "automatic"], urgency: "alta", desc: "La caja o un retén puede perder lubricante y sufrir daños si continúa circulando." },
  fuelLeak: { name: "Fuga de combustible", systems: ["combustion"], urgency: "alta", desc: "Existe riesgo de incendio; detén el vehículo y no lo vuelvas a arrancar." },
  cvJoint: { name: "Junta homocinética o palier", systems: ["all"], urgency: "media", desc: "Un chasquido al girar o vibración al acelerar puede proceder de un palier." },
  engineMount: { name: "Soporte de motor o cambio", systems: ["all"], urgency: "media", desc: "Un soporte cedido transmite vibración y golpes al arrancar o cambiar de carga." },
  dctClutch: { name: "Embragues del cambio DCT", systems: ["dct"], urgency: "media", desc: "Los embragues pueden producir temblores, resbalamiento o tirones a baja velocidad." },
  dctActuator: { name: "Actuador o mecatrónica DCT", systems: ["dct"], urgency: "alta", desc: "El control electrohidráulico puede provocar avisos, marcha de emergencia o falta de selección." },
  gearboxOil: { name: "Aceite de transmisión degradado o nivel incorrecto", systems: ["automatic", "manual"], urgency: "media", desc: "El lubricante o un nivel incorrecto puede empeorar cambios, ruidos y temperatura." },
  clutchHydraulic: { name: "Circuito hidráulico del embrague", systems: ["manual"], urgency: "alta", desc: "Bomba o bombín pueden impedir desembragar con normalidad." },
  battery48: { name: "Batería de 48 V o gestión MHEV", systems: ["mhev48"], urgency: "alta", desc: "La batería auxiliar híbrida o su unidad de control puede limitar Start/Stop y asistencia." },
  mhsg: { name: "Motor-generador MHSG y correa", systems: ["mhsg"], urgency: "alta", desc: "El generador de 48 V, su tensor o correa pueden afectar carga, arranque y asistencia." },
  dcDc: { name: "Convertidor DC/DC", systems: ["dcDc"], urgency: "alta", desc: "El convertidor puede no alimentar correctamente la red de 12 V desde el sistema de 48 V." },
  ground: { name: "Masa, fusible o conexión principal", systems: ["all"], urgency: "media", desc: "Una conexión floja, sulfatada o un fusible puede causar fallos eléctricos intermitentes." },
  gpf: { name: "Filtro de partículas de gasolina (GPF)", systems: ["gpf"], urgency: "media", desc: "Trayectos cortos repetidos pueden dificultar la regeneración del filtro de gasolina." },
  adblue: { name: "Sistema AdBlue / SCR", systems: ["adblue"], urgency: "alta", desc: "Nivel, inyector, calentador o sensores SCR pueden provocar aviso y bloqueo de arranque futuro." }
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
  ],
  braking: [
    { q: "¿Qué notas al frenar?", a: [
      ["Chirrido o roce", { brakePads: 6, brakeDiscs: 3 }], ["Vibra el volante", { brakeDiscs: 7, controlArm: 2 }], ["Pedal blando", { brakeFluid: 7, brakeCaliper: 2 }], ["Pedal muy duro", { brakeBooster: 7 }]
    ]},
    { q: "¿El coche se desvía hacia un lado?", a: [
      ["Sí", { brakeCaliper: 6, tyreDamage: 2, alignment: 2 }], ["No", { brakePads: 2, brakeDiscs: 2 }], ["No estoy seguro", {}]
    ]},
    { q: "¿Hay algún testigo de freno, ABS o estabilidad?", a: [
      ["ABS / estabilidad", { absSensor: 7 }], ["Freno rojo", { brakeFluid: 6, brakePads: 2 }], ["Ninguno", { brakePads: 2, brakeDiscs: 2, brakeCaliper: 2 }]
    ]},
    { q: "¿Alguna rueda huele a quemado o está muy caliente?", a: [
      ["Sí", { brakeCaliper: 8 }], ["No", { brakePads: 2, brakeDiscs: 2 }], ["No lo he comprobado", {}]
    ]}
  ],
  steering: [
    { q: "¿Cuál es el problema principal?", a: [
      ["Se desvía", { alignment: 6, tyreDamage: 4, brakeCaliper: 2 }], ["Volante duro", { eps: 7, tyreDamage: 2 }], ["Golpes al girar", { tieRod: 5, controlArm: 4, cvJoint: 3 }], ["Inestable en carretera", { shock: 5, tyreDamage: 4, alignment: 3 }]
    ]},
    { q: "¿El volante queda torcido al ir recto?", a: [
      ["Sí", { alignment: 7, tieRod: 3 }], ["No", { shock: 2, tyreDamage: 2 }], ["A veces", { controlArm: 3, alignment: 2 }]
    ]},
    { q: "¿El ruido aumenta al girar a tope?", a: [
      ["Sí, chasquidos", { cvJoint: 7 }], ["Sí, golpe seco", { tieRod: 5, controlArm: 4 }], ["No", { shock: 3, alignment: 2 }]
    ]},
    { q: "¿Hay aviso de dirección o estabilidad?", a: [
      ["Dirección", { eps: 8 }], ["ESC / estabilidad", { absSensor: 5, tyreDamage: 2 }], ["Ninguno", { alignment: 2, controlArm: 2 }]
    ]}
  ],
  climate: [
    { q: "¿Qué hace la climatización?", a: [
      ["Sale aire, pero no enfría", { acGas: 6, acCompressor: 4 }], ["No sale aire", { blower: 7, cabinFilter: 2, ground: 2 }], ["Sale muy poco aire", { cabinFilter: 7, blower: 3 }], ["Un lado enfría y otro no", { blendDoor: 7 }]
    ]},
    { q: "¿Escuchas un clic o ruido al activar el A/C?", a: [
      ["Clic normal, pero no enfría", { acGas: 5 }], ["Ruido fuerte", { acCompressor: 7 }], ["No se oye nada", { acCompressor: 4, ground: 3 }], ["No lo sé", {}]
    ]},
    { q: "¿El ventilador funciona en alguna velocidad?", a: [
      ["Solo en la máxima", { blower: 7 }], ["En ninguna", { blower: 5, ground: 4 }], ["En todas", { acGas: 3, acCompressor: 3, blendDoor: 2 }]
    ]},
    { q: "¿Se empañan mucho los cristales o hay mal olor?", a: [
      ["Sí", { cabinFilter: 6, acGas: 2 }], ["No", { acCompressor: 2, blendDoor: 2 }], ["Solo huele al encender", { cabinFilter: 5 }]
    ]}
  ],
  leak: [
    { q: "¿De qué color parece la mancha?", a: [
      ["Negra o marrón", { oilLeak: 7, gearboxLeak: 3 }], ["Verde, rosa o amarilla", { coolant: 7 }], ["Transparente y sin olor", { acGas: 1 }], ["Huele a combustible", { fuelLeak: 9 }]
    ]},
    { q: "¿Dónde aparece aproximadamente?", a: [
      ["Bajo la parte delantera", { oilLeak: 4, coolant: 4 }], ["Zona central", { gearboxLeak: 5, fuelLeak: 2 }], ["Cerca de una rueda", { brakeFluid: 6, shock: 4 }], ["No puedo ubicarla", {}]
    ]},
    { q: "¿Ha bajado algún nivel?", a: [
      ["Aceite", { oilLeak: 7 }], ["Refrigerante", { coolant: 7, waterpump: 2 }], ["Líquido de frenos", { brakeFluid: 9 }], ["Ninguno / no sé", {}]
    ]},
    { q: "¿La fuga continúa con el coche apagado?", a: [
      ["Sí", { oilLeak: 3, coolant: 3, gearboxLeak: 3, fuelLeak: 3 }], ["Solo tras usar el A/C", { acGas: 2 }], ["Solo con el motor en marcha", { fuelLeak: 4, coolant: 3 }]
    ]}
  ],
  gearbox: [
    { q: "¿Qué problema notas con el cambio?", a: [
      ["Temblores al iniciar la marcha", { dctClutch: 7, clutch: 6, engineMount: 3 }], ["No entra una marcha", { dctActuator: 7, clutchHydraulic: 6, transmission: 3 }], ["Golpe al cambiar", { dctActuator: 5, gearboxOil: 4, engineMount: 3 }], ["Patina al acelerar", { dctClutch: 7, clutch: 7 }]
    ]},
    { q: "¿Ocurre más en frío o en caliente?", a: [
      ["En frío", { gearboxOil: 5, clutchHydraulic: 2 }], ["En caliente", { dctClutch: 4, dctActuator: 4, clutch: 3 }], ["Siempre", { transmission: 3, engineMount: 2 }]
    ]},
    { q: "¿Aparece un aviso de transmisión?", a: [
      ["Sí", { dctActuator: 8, dctClutch: 3 }], ["No", { clutch: 3, engineMount: 2, gearboxOil: 2 }], ["Apareció y se quitó", { dctActuator: 5, sensor: 2 }]
    ]},
    { q: "¿Hay ruido al pisar o soltar el embrague?", a: [
      ["Sí", { clutch: 6, clutchHydraulic: 3 }], ["No lleva pedal de embrague", { dctClutch: 5, dctActuator: 3 }], ["No", { gearboxOil: 3, transmission: 2 }]
    ]}
  ],
  electric48: [
    { q: "¿Qué aviso o comportamiento aparece?", a: [
      ["Aviso del sistema 48 V", { battery48: 7, mhsg: 5, dcDc: 4 }], ["Start/Stop no funciona", { battery48: 5, battery: 4, mhsg: 2 }], ["Aviso de batería 12 V", { dcDc: 7, battery: 4, mhsg: 3 }], ["Ruido de correa", { mhsg: 8 }]
    ]},
    { q: "¿El coche arranca con normalidad?", a: [
      ["Sí", { battery48: 3, dcDc: 3 }], ["Le cuesta", { battery: 4, mhsg: 4, battery48: 3 }], ["No arranca", { battery: 5, dcDc: 5, mhsg: 4 }]
    ]},
    { q: "¿El aviso aparece después de trayectos cortos?", a: [
      ["Sí", { battery48: 5, battery: 3 }], ["No, también en viajes largos", { dcDc: 5, mhsg: 4 }], ["No estoy seguro", {}]
    ]},
    { q: "¿Se encienden varios testigos a la vez?", a: [
      ["Sí", { dcDc: 5, ground: 5, battery: 3 }], ["Solo el de 48 V", { battery48: 5, mhsg: 3 }], ["Ninguno", { mhsg: 2, battery48: 2 }]
    ]}
  ]
};

const state = loadState();
let currentView = "home";
let selectedVehicleId = state.vehicles[0]?.id || null;
let diagnosis = null;
let installPrompt = null;

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
  const change = v.gearbox || (v.transmission === "manual" ? "Manual" : "Automático");
  return `${v.year} · ${FUELS[v.fuel]} · ${v.power || "—"} CV · ${change}`;
}

function variantsFor(brand, model, year) {
  return VARIANTS.filter(v => v.brand === brand && v.model === model && Number(year) >= v.years[0] && Number(year) <= v.years[1]);
}

function componentsFor(car) {
  const tech = new Set(car.tech || []);
  ["abs", "eps", "ac", "tpms"].forEach(item => tech.add(item));
  if (car.turbo !== "no" && car.fuel !== "electric") tech.add("turbo");
  if (car.fuel === "diesel") ["commonRail", "egr", "dpf"].forEach(item => tech.add(item));
  if (["gasoline", "hybrid", "phev"].includes(car.fuel)) ["lambda", "catalyst"].forEach(item => tech.add(item));
  if (car.transmission === "automatic" && car.gearbox === "7DCT") tech.add("dct");
  return [...tech].filter(key => COMPONENT_LABELS[key]).map(key => ({ key, label: COMPONENT_LABELS[key] }));
}

function symptomsFor(car) {
  const tech = new Set(car.tech || []);
  return SYMPTOMS.filter(s => {
    if (s.id === "smoke" && car.fuel === "electric") return false;
    if (s.id === "electric48" && !tech.has("mhev48")) return false;
    return true;
  });
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
    ${installExperience()}
    <div class="section-head"><div><h2>Tu garaje</h2><p class="muted">${state.vehicles.length} ${state.vehicles.length === 1 ? "vehículo" : "vehículos"}</p></div><button class="text-button" data-action="garage">Ver todos</button></div>
    ${cars.length ? `<div class="car-list">${cars.map(carCard).join("")}</div>` : emptyGarage()}
    <div class="notice"><span>⚠</span><div><strong>Orientación, no diagnóstico definitivo</strong>Si hay un testigo rojo, frenos deficientes, humo intenso o sobrecalentamiento, detén el vehículo en un lugar seguro.</div></div>
  `;
  bindCommonActions();
}

function installExperience() {
  const standalone = window.matchMedia?.("(display-mode: standalone)").matches;
  if (standalone) return `<div class="install-card"><span>✓</span><div class="install-copy"><strong>MotorClaro está instalada</strong><small>Puedes abrirla como cualquier otra aplicación.</small></div></div>`;
  if (location.protocol === "file:") return `<div class="notice"><span>↓</span><div><strong>Para instalarla en Windows</strong>Ábrela desde su dirección HTTPS de GitHub Pages. Los archivos abiertos directamente no pueden instalar una PWA.</div></div>`;
  if (installPrompt) return `<div class="install-card"><span>↓</span><div class="install-copy"><strong>Instalar MotorClaro</strong><small>Añádela a Windows y úsala sin conexión.</small></div><button data-action="install-app">Instalar</button></div>`;
  return "";
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
      <h1>¿Qué notas?</h1><p>Elige el síntoma principal. El perfil de ${componentsFor(car).length} sistemas filtra una base de ${Object.keys(FAULTS).length} causas posibles.</p>
    </section>
    <div class="section-head"><div><h2>Síntoma principal</h2><p>Podrás empezar de nuevo en cualquier momento.</p></div></div>
    <div class="symptom-grid">${symptomsFor(car).map(s => `<button class="symptom-card" data-symptom="${s.id}"><span>${s.icon}</span><strong>${s.label}</strong></button>`).join("")}</div>
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
  (car.tech || []).forEach(tag => tags.add(tag));
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
  const tech = new Set(car.tech || []);
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
  if (tech.has("timingChain")) items.push(["timing", "Cadena de distribución", "Sin cambio periódico fijo; revisar ruidos, tensor y especificación de aceite"]);
  else if (combustion) items.push(["timing", "Distribución", "Confirmar correa/cadena y plazo exacto del motor"]);
  if (tech.has("dct")) items.push(["gearbox", `Transmisión ${car.gearbox || "DCT"}`, "Revisar aceite, fugas y comportamiento según plan específico de la caja"]);
  else if (car.transmission === "automatic") items.push(["gearbox", "Aceite de caja automática", "Según caja: frecuentemente 60.000–120.000 km"]);
  if (tech.has("dpf")) items.push(["dpf", "DPF y sistema de emisiones", "Vigilar regeneraciones, nivel de aceite y uso frecuente en trayectos cortos"]);
  if (tech.has("adblue")) items.push(["adblue", "AdBlue / SCR", "Comprobar nivel, avisos y cristalización en cada revisión"]);
  if (tech.has("mhev48")) items.push(["mhev48", "Sistema híbrido de 48 V", "Inspección visual de correa MHSG, conexiones y avisos del sistema"]);
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
  main.querySelector("[data-action='install-app']")?.addEventListener("click", installApp);
}

async function installApp() {
  if (!installPrompt) return;
  installPrompt.prompt();
  await installPrompt.userChoice;
  installPrompt = null;
  render();
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
        <label class="field"><span>Combustible</span><select name="fuel" id="fuelSelect">${Object.entries(FUELS).map(([key, value]) => `<option value="${key}">${value}</option>`).join("")}</select></label>
      </div>
      <label class="field" id="variantField"><span>Versión técnica</span><select name="variantId" id="variantSelect"><option value="">Configurar manualmente</option></select><small class="muted" id="variantNote">Las versiones verificadas completan automáticamente motor, cambio y componentes.</small></label>
      <div class="two-cols form-grid">
        <label class="field"><span>Potencia (CV)</span><input required name="power" id="powerInput" inputmode="numeric" type="number" min="30" max="1000" placeholder="Ej. 110"></label>
        <label class="field"><span>Cambio</span><select name="transmission" id="transmissionSelect"><option value="manual">Manual</option><option value="automatic">Automático</option></select></label>
      </div>
      <label class="field"><span>¿Lleva turbo?</span><select name="turbo" id="turboSelect"><option value="yes">Sí</option><option value="no">No / atmosférico</option><option value="unknown">No lo sé</option></select></label>
      <label class="field"><span>Código de motor (opcional)</span><input name="engineCode" maxlength="20" placeholder="Ej. CRKB"></label>
      <label class="field"><span>Kilometraje actual</span><input required name="mileage" inputmode="numeric" type="number" min="0" max="2000000" placeholder="Ej. 126000"></label>
      <div class="button-row"><button type="button" class="button ghost" data-close>Cancelar</button><button class="button">Guardar coche</button></div>
    </form>`);
  const brand = sheetContent.querySelector("#brandSelect");
  const model = sheetContent.querySelector("#modelSelect");
  const year = sheetContent.querySelector("#yearSelect");
  const variant = sheetContent.querySelector("#variantSelect");
  const variantField = sheetContent.querySelector("#variantField");
  const fuel = sheetContent.querySelector("#fuelSelect");
  const power = sheetContent.querySelector("#powerInput");
  const transmission = sheetContent.querySelector("#transmissionSelect");
  const turbo = sheetContent.querySelector("#turboSelect");
  const applyVariant = () => {
    const spec = VARIANTS.find(v => v.id === variant.value);
    if (!spec) return;
    fuel.value = spec.fuel; power.value = spec.power; transmission.value = spec.transmission; turbo.value = spec.turbo;
  };
  const updateVariants = () => {
    const matches = variantsFor(brand.value, model.value, year.value);
    variantField.style.display = matches.length ? "grid" : "none";
    variant.innerHTML = `<option value="">Otra versión / configurar manualmente</option>${matches.map(v => `<option value="${v.id}">${v.generation} · ${v.engine} · ${v.gearbox}</option>`).join("")}`;
  };
  const updateYears = () => {
    const [min, max] = VEHICLES[brand.value][model.value];
    year.innerHTML = Array.from({ length: max - min + 1 }, (_, i) => max - i).map(y => `<option>${y}</option>`).join("");
    updateVariants();
  };
  const updateModels = () => { model.innerHTML = Object.keys(VEHICLES[brand.value]).map(m => `<option>${m}</option>`).join(""); updateYears(); };
  brand.addEventListener("change", updateModels); model.addEventListener("change", updateYears); year.addEventListener("change", updateVariants); variant.addEventListener("change", applyVariant); updateModels();
  sheetContent.querySelector("[data-close]").addEventListener("click", closeSheet);
  sheetContent.querySelector("#carForm").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.target));
    const spec = VARIANTS.find(v => v.id === data.variantId);
    const verified = spec ? { generation: spec.generation, engine: spec.engine, gearbox: spec.gearbox, tech: spec.tech, fuel: spec.fuel, power: spec.power, transmission: spec.transmission, turbo: spec.turbo, verified: true } : {};
    const car = { id: crypto.randomUUID?.() || String(Date.now()), ...data, ...verified, year: Number(data.year), power: Number(spec?.power || data.power), mileage: Number(data.mileage) };
    state.vehicles.push(car); selectedVehicleId = car.id; saveState(); closeSheet(); render(); showToast("Coche añadido al garaje");
  });
}

function openCarDetails(id) {
  const car = state.vehicles.find(v => v.id === id); if (!car) return;
  const components = componentsFor(car);
  openSheet(`
    <p class="eyebrow">${car.verified ? "Versión técnica identificada" : "Configuración manual"}</p>
    <h2>${escapeHtml(vehicleName(car))}</h2>
    <p class="muted">${escapeHtml(car.generation ? `${car.generation} · ${car.engine}` : vehicleDetails(car))}</p>
    <div class="selector-list">
      <div class="selector-card"><strong>${car.mileage.toLocaleString("es-ES")} km</strong><small>Kilometraje registrado</small></div>
      <div class="selector-card"><strong>${escapeHtml(vehicleDetails(car))}</strong><small>${car.verified ? "Configuración procedente del catálogo técnico" : "Datos introducidos manualmente"}</small></div>
      ${car.engineCode ? `<div class="selector-card"><strong>${escapeHtml(car.engineCode)}</strong><small>Código de motor</small></div>` : ""}
      ${car.lastDiagnosis ? `<div class="selector-card"><strong>${escapeHtml(car.lastDiagnosis.results[0].name)}</strong><small>Último diagnóstico · ${car.lastDiagnosis.results[0].match}% de coincidencia</small></div>` : ""}
    </div>
    <div class="section-head"><div><h3>Componentes identificados</h3><p>${components.length} sistemas aplicados al diagnóstico</p></div></div>
    <div class="component-grid">${components.map(c => `<div class="component-pill"><span>✓</span>${escapeHtml(c.label)}</div>`).join("")}</div>
    ${!car.verified ? `<div class="notice"><span>ℹ</span><div><strong>Perfil parcialmente genérico</strong>Añade una versión técnica verificada cuando esté disponible para distinguir componentes específicos.</div></div>` : ""}
    <div class="button-row"><button class="button lime" data-diagnose-car>Diagnosticar</button><button class="button ghost" data-maintenance-car>Mantenimiento</button></div>
    <button class="button danger" style="margin-top:10px" data-delete-car>Eliminar del garaje</button>
  `);
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
window.addEventListener("beforeinstallprompt", event => {
  event.preventDefault(); installPrompt = event; if (currentView === "home") renderHome();
});
window.addEventListener("appinstalled", () => { installPrompt = null; showToast("MotorClaro instalada"); render(); });

render();
if (!state.profile.name) setTimeout(openProfile, 350);
