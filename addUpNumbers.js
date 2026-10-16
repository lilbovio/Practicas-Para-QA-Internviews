// targeted number: n in the array of numbers, check if the first number in the array isnt bigger than the targeted number


function addUpNumbers(numbers, target) {
    let seen = new Map();

    for (let i = 0; i < numbers.length; i++) {
        let complement = target - numbers[i];
        if (seen.has(complement)) {
            return [seen.get(complement), i];
        }
        seen.set(numbers[i], i);
    }
    return null;
}