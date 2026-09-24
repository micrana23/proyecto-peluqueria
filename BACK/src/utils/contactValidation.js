const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^\d{9}$/;

export function validateContactPayload(payload = {}) {
  // Normaliza el texto antes de validar y evita aceptar valores que no sean strings.
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const email = typeof payload.email === "string" ? payload.email.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const message =
    typeof payload.message === "string" ? payload.message.trim() : "";
  const errors = {};

  if (!name) errors.name = "El nombre es obligatorio";
  if (!email) {
    errors.email = "El email es obligatorio";
  } else if (!emailPattern.test(email)) {
    errors.email = "El email no tiene un formato válido";
  }
  if (!phone) {
    errors.phone = "El teléfono es obligatorio";
  } else if (!phonePattern.test(phone)) {
    errors.phone = "El teléfono debe tener 9 dígitos";
  }
  if (!message) errors.message = "El mensaje es obligatorio";

  return {
    errors,
    values: { name, email, phone, message },
  };
}
