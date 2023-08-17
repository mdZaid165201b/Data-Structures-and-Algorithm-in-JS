const reverseString = (string) => {
    string = string.split("");
    let left = 0;
    let right  = string.length - 1;
    while(left <= right) {
        let temp = string[left];
        string[left] = string[right];
        string[right] = temp;
        left++;
        right--;
    }
    return string.join("");
}
const string  = "abcd";
console.log(reverseString(string));