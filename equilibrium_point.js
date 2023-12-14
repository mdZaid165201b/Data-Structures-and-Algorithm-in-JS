const findSum = (startIndex, endIndex, array) => {
    console.log('findSum :::');
    let sum = 0;
    while(startIndex < endIndex) {
        sum += array[startIndex];
        startIndex++;
    }
    return sum;
}

const findEquilibriumIndex = (array) => {
    if (array.length === 1) return 1;
    let eqIndex = 1;
    while(eqIndex < array.length) {
        let leftSum = findSum(0, eqIndex, array);
        let rightSum = findSum(eqIndex+1, array.length, array);
        if(leftSum !==  rightSum) {
            eqIndex++;
        }
        else return eqIndex + 1;
    }
}


// const array = [1,3,5,2,2];
// const array = [1];
// const array = [0,1,3,-2,-1];
const array = [-7, 1,5,2,-4,3,0];


console.log(findEquilibriumIndex(array));