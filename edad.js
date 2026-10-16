export function validarEdad(edad) {
  if (typeof edad !== "number" || Number.isNaN(edad)) {
    throw new Error("La edad debe ser un número");
  }
  if (!Number.isInteger(edad)) return false;
  return edad >= 18 && edad <= 65;
}