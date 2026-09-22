const test = require("node:test");
const assert = require("node:assert/strict");

require("../diagnosis-data.js");
const data = globalThis.MOTORCLARO_DIAG;

test("el motor incluye una base amplia de síntomas y causas", () => {
  assert.ok(Object.keys(data.faults).length >= 70);
  assert.ok(data.symptoms.length >= 14);
  assert.ok(data.questions.length >= 25);
  assert.ok(Object.keys(data.genericObd).length >= 30);
});

test("todas las respuestas puntúan causas existentes", () => {
  for (const question of data.questions) {
    assert.ok(question.id && question.text && question.answers.length >= 2);
    for (const answer of question.answers) {
      for (const faultId of Object.keys(answer.scores || {})) {
        assert.ok(data.faults[faultId], `${question.id} referencia ${faultId}`);
      }
      assert.ok(Array.isArray(answer.flags));
    }
  }
});

test("cada causa tiene prioridad, explicación y comprobación", () => {
  const priorities = new Set(["informativa", "baja", "media", "alta", "crítica"]);
  for (const [id, fault] of Object.entries(data.faults)) {
    assert.ok(fault.name && fault.desc && fault.checks, id);
    assert.ok(fault.systems.length > 0, id);
    assert.ok(priorities.has(fault.urgency), id);
  }
});

test("los códigos OBD genéricos tienen un formato válido", () => {
  for (const code of Object.keys(data.genericObd)) assert.match(code, /^[PBCU][0-9A-F]{4}$/);
});
