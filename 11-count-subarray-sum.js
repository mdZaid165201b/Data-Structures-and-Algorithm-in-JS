//  statement: find count of subarray sum equals k

const findCountSubArraySumEqualsK = (array, k) => {
    let count = 0;
    for(let i = 0; i < array.length - 1; i++) {
        let prevSum = 0;
        if(array[i] === k) count++;
        for(let j = i; j < array.length - 1; j++) {
            prevSum += array[j] + array[j + 1];
            if(prevSum > k) break;
            else if(prevSum === k) count++;
        }
    }
    if(array[array.length - 1] == k) count++;
    return count;
}

// const array = [1,1,1];
const array = [1,-1,0];
// const array = [100,1,2,3,4];
console.log(findCountSubArraySumEqualsK(array, 0));