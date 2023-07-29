
const longestConsecutiveSubsequence = (array) => {
    let sortedArray = array.sort((a , b) => a - b);
    let maxCount = 0;
    let count = 1;
    for(let i = 0; i < sortedArray.length; i++) {
        if(Math.abs(sortedArray[i] - sortedArray[i + 1]) === 1) {
            console.log("if ::")
            console.log(Math.abs(sortedArray[i] - sortedArray[i + 1]), "difference ::")
            count++;
        }
        else {
            maxCount = count > maxCount ? count : maxCount;
            count = 1;
        }
    }
    return maxCount;
}

// const array = [1, 9, 3, 10, 4, 20, 2];
const array = [36, 41, 56, 35, 44, 33, 34, 92, 43, 32, 42];
console.log(longestConsecutiveSubsequence(array));