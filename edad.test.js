import { describe, it, expect } from "vitest";
import { validarEdad } from "./edad.js";

describe("validarEdad", () => {
  it("rechaza 17 (justo bajo el límite)", () => {
    expect(validarEdad(17)).toBe(false);
  });

  it("acepta 18, 19, 64 y 65", () => {
    expect(validarEdad(18)).toBe(true);
    expect(validarEdad(65)).toBe(true);
  });

  it("rechaza 66", () => {
    expect(validarEdad(66)).toBe(false);
  });

  it("rechaza decimales", () => {
    expect(validarEdad(18.5)).toBe(false);
  });

  it("lanza error si no es número", () => {
    expect(() => validarEdad("abc")).toThrow("debe ser un número");
  });

  it("lanza error si es NaN", () => {
    expect(() => validarEdad(NaN)).toThrow("debe ser un número");
  });

  it("acepta 18 y 65 como límites", () => {
    expect(validarEdad(18)).toBe(true);
    expect(validarEdad(65)).toBe(true);
  });

  it("rechaza null", () => {
    expect(() => validarEdad(null)).toThrow("debe ser un número");
  });
  
  it("rechaza numeros negativos", () => {
    expect(validarEdad(-1)).toBe(false);
  });

  it("rechaza 0", () => {
    expect(validarEdad(0)).toBe(false);
  });
});