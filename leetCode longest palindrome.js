/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (str) {
    let max = "";
    if (str.split("").reverse().join("") === str) { return str; }
    else if (str.length <= 2) { return str[0] }
    for (let i = 0; i < str.length; i++) {
        let lastindex = str.lastIndexOf(str[i]);
        if (lastindex > i) {
            let subString1 = str.substring(i, lastindex + 1);
            if (subString1.split("").reverse().join("") === subString1) {
                max = subString1.length > max.length ? subString1 : max;
            }
            else {
                for (let j = lastindex - 1; j >= i; j--) {
                    if (str[j] === str[i]) {
                        let t = str.substring(i, j + 1);
                        if (t === t.split("").reverse().join("")) {
                            max = t.length > max.length ? t : max;
                        }
                    }
                }
            }
        }
    }
    return max;
};
