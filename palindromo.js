export function esPalindromo(texto) {
    if (typeof texto !== "string") {
        throw new Error("El texto debe ser una cadena de caracteres");
    }
    const textoLimpio = texto.toLowerCase().replace(/[^a-z0-9]/g, "");
    const textoReverso = textoLimpio.split("").reverse().join("");
    return textoLimpio === textoReverso;
}
