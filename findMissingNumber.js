const findMissingNumber = (array) => {
    let totalSum = 0;
    for(let i = 0; i <= array[array.length - 1]; i++) { totalSum += i; }
    const arraySum = array.reduce((curr, acc) => curr + acc , 0);
    return totalSum - arraySum;
}

const array = [1, 2, 4, 6, 3, 7, 8];
console.log(findMissingNumber(array));