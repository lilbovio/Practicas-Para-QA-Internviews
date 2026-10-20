/* reverse a string using two pointers
no use of .reverse() method 
needs to be hand made to show two pointer approach
reversedString["hello"] => "olleh"
reversedString["a"] => "a"
reversedString[""] => ""
reversedString[null] => we dont enter the function at all 
no second array, we modify the given string
*/

function reverseString(s) {
    if ( s === null || s.length === 0) {
        return s;
    }
    let left = 0;
    let right = s.length - 1;

    while ( left < right ) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }
    return s;
}
