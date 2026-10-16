/*
Escribe una función containsDuplicate(numbers) que devuelva true si algún elemento aparece más de una vez y false si todos son distintos.
containsDuplicate([1, 2, 3, 1]);
// true

containsDuplicate([1, 2, 3, 4]);
// false

containsDuplicate([]);
// false

containsDuplicate([5, 5]);
// true
*/
function containsDuplicate(numbers) {
    for(let i = 0; i <numbers.length; i++){
        for(let j = i + 1; j < numbers.length; j++){
            if(numbers[i] === numbers[j]){
                return true;
            }
        }
    }
    return false;
}