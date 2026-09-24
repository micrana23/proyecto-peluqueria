import test from "node:test";
import assert from "node:assert/strict";
import { validateContactPayload } from "../src/utils/contactValidation.js";

test("rechaza un formulario de contacto incompleto", () => {
  const result = validateContactPayload({});

  assert.deepEqual(Object.keys(result.errors).sort(), [
    "email",
    "message",
    "name",
    "phone",
  ]);
});

test("normaliza y acepta un formulario válido", () => {
  const result = validateContactPayload({
    name: "  Ana García ",
    email: " ana@example.com ",
    phone: "612345678",
    message: "  Me gustaría reservar una cita. ",
  });

  assert.deepEqual(result.errors, {});
  assert.deepEqual(result.values, {
    name: "Ana García",
    email: "ana@example.com",
    phone: "612345678",
    message: "Me gustaría reservar una cita.",
  });
});
