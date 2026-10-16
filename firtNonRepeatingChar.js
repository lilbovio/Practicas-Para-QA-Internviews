/* First non-repeating character. Write a function firstUnique(str) that returns the first character in the string that appears only once. If there is none, return null.

firstUnique("swiss")   // "w"
firstUnique("aabb")    // null
firstUnique("level")   // "v"

Using a map to store the count of each character and then iterating through the string again to find the first character with a count of 1.
*/
function firstNonRepeatingChar(str) {
    const charCount = new Map();
    
    // Count occurrences of each character
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Find the first character with a count of 1
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char;
        }
    }
    
    return null;
}