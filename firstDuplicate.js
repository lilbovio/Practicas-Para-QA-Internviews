function firstDuplicate(numbers) {
    let visited = new Set();

    for (let i = 0; i < numbers.length; i++) {
        if (visited.has(numbers[i])) {
            return numbers[i];
        } else {
            visited.add(numbers[i])
        }
    }

    return null;
}