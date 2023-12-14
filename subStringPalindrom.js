const substringPalindrom = (string) => {
    string = string.split("");
    let left = 0;
    let right  = string.length - 1;
    // console.log(string.slice(left, 4 + 1));
    // console.log(string);
    const memorized = {};
    let count = 1;
    while(left <= right) {
        console.log(string[left], "left");
        console.log(string[right], "right");
        if(string[left] === string[right]) {
            if(left === right) {
                left++;
                right--;
                continue;
            };
            let isPalindrom = checkPalindrom(string.slice(left, right + 1), left, right);
            if(isPalindrom) {
                memorized[`substring${count}`] = {start: left, ending: right};
                count++;
                left++;
                right = string.length - 1;
            }
        }
        right--;
    }
    console.log(memorized);

}

const checkPalindrom = (string, left, right) => {
    console.log(string);
    let innerRight = string.length - 1;
    for(let i = 0; i < string.length; i++) {
        if(string[i] !== string[innerRight]) return false;
        innerRight--;
    }
    return true;
}

const  string = "aabaacd";

console.log(substringPalindrom(string))
console.log(string)