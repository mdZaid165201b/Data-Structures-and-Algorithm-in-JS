const longestPrefixString = (array) => {
    const sortedArray = array.sort();
    const string1 = sortedArray[0];
    const string2 = sortedArray[1];
    let index = 0;
    while(index < string1.length) {
        if(string1[index] !== string2[index]) break;
        index++;
    }
    const longestSubstring = string1.substring(0, index);
    console.log({longestSubstring})
}

// const strings = ["flower","flow","flight"]
// const strings = ["geeksforgeeks", "geeks", "geek","geezer"]
const strings = ["dog","racecar","car"]
console.log(longestPrefixString(strings));