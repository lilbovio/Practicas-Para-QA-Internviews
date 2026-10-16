// Finding the very first non repeating character in a string using a map to store the count of each character and then iterating through the string again to find the first character with a count of 1.

function firstUniqueChar(text) {
    let charCount = new Map();

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        if (charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        } else {
            charCount.set(char, 1);
        }
    }

    for (let i = 0; i < text.length; i++) {
        if (charCount.get(text[i]) === 1) {
            return text[i];
        }
    }
    return null;
}