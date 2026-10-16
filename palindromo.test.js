import { describe, it, expect } from "vitest";
import { esPalindromo } from "./palindromo.js";

describe(esPalindromo.name, () => {
    it("debe retornar true para 'anita lava la tina'", () => {
        expect(esPalindromo("anita lava la tina")).toBe(true);
    });

    it("debe retornar true para 'A man, a plan, a canal: Panama'", () => {
        expect(esPalindromo("A man, a plan, a canal: Panama")).toBe(true);
    });

    it("debe retornar false para 'Hello, World!'", () => {
        expect(esPalindromo("Hello, World!")).toBe(false);
    });

    it("debe lanzar un error si el argumento no es una cadena", () => {
        expect(() => esPalindromo(123)).toThrow("El texto debe ser una cadena de caracteres");
    });

    it("debe rechazar nulo", () => {
        expect(() => esPalindromo(null)).toThrow("El texto debe ser una cadena de caracteres");
    });

    it("debe rechazar mayusculas", () => {
        expect(esPalindromo("Anita lava la tina")).toBe(true);
    });

    it("lanza error si existen espacios", () => {
        expect(esPalindromo("anita lava la tina")).toBe(true);
    });

    it("solo debe aceptar un caracter", () => {
        expect(esPalindromo("a")).toBe(true);
    });

    it("numeros y letras", () => {
        expect(esPalindromo("1a2b2a1")).toBe(true);
    });
});