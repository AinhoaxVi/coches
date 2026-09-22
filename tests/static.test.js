const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

test("index carga todos los recursos versionados", () => {
  const html = read("index.html");
  for (const asset of ["styles.css?v=9", "catalog.js?v=9", "diagnosis-data.js?v=9", "maintenance-data.js?v=9", "app.js?v=9"]) {
    assert.match(html, new RegExp(asset.replace("?", "\\?")));
  }
});

test("el service worker precachea los recursos críticos y permite actualizar", () => {
  const sw = read("sw.js");
  for (const asset of ["styles.css?v=9", "catalog.js?v=9", "diagnosis-data.js?v=9", "maintenance-data.js?v=9", "app.js?v=9"]) assert.ok(sw.includes(asset));
  assert.ok(sw.includes("SKIP_WAITING"));
  assert.ok(sw.includes('event.request.mode === "navigate"'));
});

test("el manifiesto es JSON válido y tiene iconos instalables", () => {
  const manifest = JSON.parse(read("manifest.webmanifest"));
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons.some(icon => icon.sizes === "192x192"));
  assert.ok(manifest.icons.some(icon => icon.sizes === "512x512"));
});
