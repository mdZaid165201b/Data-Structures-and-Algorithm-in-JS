const findPivotIndex = (array) => {
    let leftSum = 0;
    let rightSum = 0;
    let pivotIndex = null;
    for(let i = 1; i < array.length; i++) {
        leftSum = findSum(0, i, array);
        console.log({leftSum})
        rightSum = findSum(i + 1, array.length, array);
        console.log({rightSum})
        if(rightSum > leftSum) continue;
        if(leftSum === rightSum) pivotIndex = i;
    }
    return pivotIndex;
}

const findSum = (leftIndex, rightIndex, array) => {
    let sum = 0;
    for(let i = leftIndex; i < rightIndex; i++) {
        sum += array[i];
    }
    return sum;
}

console.log([4, 7, 3, 6, 8, 6]);

// console.log("pivot index :",findPivotIndex([4, 1, 3, 2, 4, 6]))
console.log("pivot index :",findPivotIndex([1,2,3]))