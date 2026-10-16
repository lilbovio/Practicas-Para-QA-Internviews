function containsDuplicate(numbers) {
    let visited = new Set();

    for (let i = 0; i < numbers.length; i++) {
        // 1. Consultar si numbers[i] ya existe en visited.
        if(visited.has(numbers[i])){
            // 2. Si existe, devolver true.
            return true;
        // 3. Si no existe, agregarlo a visited.
        } else {
            visited.add(numbers[i])
        }
    }

    return false;
}