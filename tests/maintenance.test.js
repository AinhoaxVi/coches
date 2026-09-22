const test = require("node:test");
const assert = require("node:assert/strict");

require("../maintenance-data.js");
const maintenance = globalThis.MOTORCLARO_MAINTENANCE;

test("el Hyundai i30 1.0 T-GDi obtiene el plan europeo específico", () => {
  const plan = maintenance.resolve({brand:"Hyundai",model:"i30",year:2022,engine:"1.0 T-GDi 120 CV",engineCode:"G3LE",power:120,fuel:"gasoline",transmission:"manual",tech:[]});
  assert.equal(plan.verified, true);
  assert.equal(plan.items.find(item => item.id === "oil").km, 15000);
  assert.equal(plan.items.find(item => item.id === "spark").km, 75000);
  assert.equal(plan.items.find(item => item.id === "coolant").firstKm, 210000);
});

test("el uso exigente reduce solo el intervalo previsto", () => {
  const plan = maintenance.resolve({brand:"Hyundai",model:"i30",year:2022,engineCode:"G3LE",power:120,fuel:"gasoline",usage:"severe",tech:[]});
  const oil = plan.items.find(item => item.id === "oil");
  assert.equal(oil.km, 7500);
  assert.equal(oil.months, 6);
});

test("los planes sin ficha exacta no inventan kilómetros", () => {
  const electric = maintenance.resolve({brand:"Renault",model:"Mégane",year:2024,fuel:"electric",tech:[],transmission:"automatic"});
  assert.equal(electric.verified, false);
  assert.ok(!electric.items.some(item => item.id === "oil" || item.id === "spark"));
  electric.items.forEach(item => assert.equal(item.km ?? null, null));

  const saab = maintenance.resolve({brand:"Saab",model:"9-3",year:2008,fuel:"diesel",baseFuel:"diesel",tech:["commonRail","turbo"],transmission:"manual"});
  assert.ok(saab.items.some(item => item.id === "fuel"));
  assert.ok(!saab.items.some(item => item.id === "spark"));
});
