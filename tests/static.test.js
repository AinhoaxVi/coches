const test = require("node:test");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const read = file => fs.readFileSync(path.join(root, file), "utf8");

const versionedAssets = ["styles.css", "catalog.js", "diagnosis-data.js", "maintenance-data.js", "app.js"];

test("index y service worker usan la misma versión para todos los recursos", () => {
  const html = read("index.html");
  const sw = read("sw.js");
  const versions = new Set();
  for (const asset of versionedAssets) {
    const match = html.match(new RegExp(`${asset.replace(".", "\\.")}\\?v=(\\d+)`));
    assert.ok(match, `${asset} no está versionado en index.html`);
    versions.add(match[1]);
    assert.ok(sw.includes(`${asset}?v=${match[1]}`), `${asset} no está precacheado con la misma versión`);
  }
  assert.equal(versions.size, 1, "los recursos de index.html tienen versiones distintas");
});

test("el service worker precachea los recursos críticos y permite actualizar", () => {
  const sw = read("sw.js");
  assert.ok(sw.includes("SKIP_WAITING"));
  assert.ok(sw.includes('event.request.mode === "navigate"'));
});

test("Diagnosticar ofrece acceso directo por código OBD", () => {
  const app = read("app.js");
  assert.ok(app.includes('id="obdDirectForm"'));
  assert.ok(app.includes('symptom:"obd"'));
  assert.ok(app.includes("Diagnóstico por código OBD"));
});

test("el manifiesto es JSON válido y tiene iconos instalables", () => {
  const manifest = JSON.parse(read("manifest.webmanifest"));
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.icons.some(icon => icon.sizes === "192x192"));
  assert.ok(manifest.icons.some(icon => icon.sizes === "512x512"));
});
