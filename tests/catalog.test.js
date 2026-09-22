const test = require("node:test");
const assert = require("node:assert/strict");

require("../catalog.js");
const variants = globalThis.VEHICLE_VARIANTS;

test("el catálogo mantiene 633 variantes con identificadores únicos", () => {
  assert.equal(variants.length, 633);
  assert.equal(new Set(variants.map(item => item.id)).size, variants.length);
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
