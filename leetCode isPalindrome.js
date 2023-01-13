/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if(parseInt(x.toString().split("").reverse().join("")) === x) return true;
    else return false
};
