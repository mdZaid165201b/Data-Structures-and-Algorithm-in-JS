// statement: Count pairs with given sum

const findPairsWithGivenSum = (array, sum) => {
    let left = 0;
    let right = array.length - 1;
    let count = 0;
    let pairsCount = 0;

    while(left !== array.length - 1) {
        if(array[left] + array[right] === sum && left !== right) {
            pairsCount++;
            right--;
        }
        else if(array[left] + array[right] === sum && left === right) {
            right = array.length - 1;
            count++;
            left++;

        }
        else if (left === right) {
            count++;
            left++;
            right = array.length - 1;
        }
        else right--;
    }
    return pairsCount;
}

// const array = [1, 5, 7, -1];
// const array = [1, 5, 7, -1, 5];
// const array = [1, 1, 1, 1];
// const array = [10, 12, 10, 15, -1, 7, 6, 5, 4, 2, 1, 1, 1];
const array = [1,1,1];
console.log(findPairsWithGivenSum(array, 2));;
