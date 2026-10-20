/**
 * @param {string} s
 * @return {number}
 */
var makeStringGood = function(s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (stack.length > 0 && Math.abs(stack[stack.length - 1].charCodeAt(0) - char.charCodeAt(0)) === 32) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.length;
};