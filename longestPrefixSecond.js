const longestPrefixString = (array) => {
    let prefixString = "";
    let word = array[0];
    for(let i = 0; i < word.length; i++) {
        for(let j = 1; j < array.length; j++) {
            if(array[j][i] === word[i]) {
            }
            else return prefixString;
        }
        prefixString += word[i];
    }
}

// const strings = ["flower","flow","flight"];
// const strings = ["geeksforgeeks", "geeks", "geek","geezer"];
const strings = ["apple", "ape", "april"];
// const strings = ["dog","racecar","car"];
console.log(longestPrefixString(strings))