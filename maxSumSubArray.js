const maximumSumSubArray = (array) => {
    let maxArraySum = Number.MIN_VALUE;
    for(let i = 0; i < array.length; i++) {
        let sum = 0;
        for(let j = i; j < array.length; j++) {
            sum += array[j];
            if(sum > maxArraySum) {
                maxArraySum = sum;
            }
        }
    }
    return maxArraySum;
}
const maximumSumSubArrayTwo = (array) => {
    let currentSum = 0;
    let maxSum = Number.MIN_VALUE;
    let index = 0;
    while(index < array.length) {
        currentSum += array[index];
        if(currentSum > maxSum) {
            maxSum = currentSum;
        }
        if(currentSum < 0) {
            currentSum = 0;
        }
        index++;
    }
    return maxSum;
}
const array = [-3, -4, 5, -1, 2, -4, 6, -1];
// const array = [-2, 3, -1, 2];
console.log(maximumSumSubArrayTwo(array));