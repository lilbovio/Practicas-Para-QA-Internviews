/*
- Debe aceptar cadenas de texto.
- Si recibe una cadena vacía, debe devolver 0.
- Si recibe null o un valor que no sea una cadena, debe lanzar un error explícito   con el mensaje "Input must be a string".
*/


function countVowels(text) {
    if( typeof text !== "string") {
        throw new Error("Input must be a string");
    }
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if ("aeiou".includes(text[i].toLowerCase())) {
            count++;
        }
    }

    return count;
}