const test = require("node:test");
const assert = require("node:assert/strict");

require("../catalog.js");
const variants = globalThis.VEHICLE_VARIANTS;

test("el catálogo ampliado mantiene identificadores únicos", () => {
  assert.ok(variants.length > 680);
  assert.equal(new Set(variants.map(item => item.id)).size, variants.length);
});

test("Saab 9-3 cubre sus dos generaciones, carrocerías y años comerciales", () => {
  const saab = variants.filter(item => item.brand === "Saab" && item.model === "9-3");
  assert.ok(saab.length >= 70);
  assert.equal(Math.min(...saab.map(item => item.years[0])), 1998);
  assert.equal(Math.max(...saab.map(item => item.years[1])), 2014);
  for (const term of ["YS3D", "YS3F", "Viggen", "SportCombi", "Cabrio", "9-3X", "NEVS"]) {
    assert.ok(saab.some(item => item.generation.includes(term)), `falta ${term}`);
  }
  for (const power of [122, 150, 175, 180, 205, 210, 220, 225, 250, 280]) {
    assert.ok(saab.some(item => item.power === power), `falta ${power} CV`);
  }
});

test("los Saab turbo de gasolina conservan inyección indirecta", () => {
  const saabTurbo = variants.filter(item => item.brand === "Saab" && item.fuel === "gasoline" && item.turbo === "yes");
  assert.ok(saabTurbo.length > 0);
  saabTurbo.forEach(item => {
    assert.ok(item.tech.includes("portInjection"));
    assert.ok(!item.tech.includes("directInjection"));
  });
});

test("cada variante contiene los campos mínimos y años coherentes", () => {
  for (const item of variants) {
    assert.ok(item.brand && item.model && item.generation && item.engine);
    assert.ok(Number.isInteger(item.years[0]) && item.years[0] <= item.years[1]);
    assert.ok(item.power > 0);
    assert.ok(["manual", "automatic"].includes(item.transmission));
    assert.ok(Array.isArray(item.tech));
  }
});

test("FSI y GDi se clasifican como inyección directa", () => {
  const direct = variants.filter(item => /FSI|GDi/i.test(item.engine));
  assert.ok(direct.length > 0);
  direct.forEach(item => assert.ok(item.tech.includes("directInjection")));
  direct.forEach(item => assert.ok(!item.tech.includes("portInjection")));
});
