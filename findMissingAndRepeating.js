const findMissingAndRepeating = (array) => {
    array = array.sort((a, b) => a - b);
    let missingNumber = findMissingNumber(array);
    console.log({missingNumber});
    let repeatingNumber = findRepeatingNumber(array);
    return `Missing Number : ${missingNumber} --> Repeating Number : ${repeatingNumber} `
}

const findRepeatingNumber = (array) => {
    console.log('findRepeatingNumber ::');
    const memorizedNumber = {
        element: array[0],
        frequency: 1
    };
    let index = 1;
    while(index < array.length) {
        if(memorizedNumber.element === array[index]) {
            memorizedNumber.frequency++;
            break;
        }
        else {
            memorizedNumber.element = array[index];
            memorizedNumber.frequency = 1;
        }
        index++;
    }
    return memorizedNumber.element;
}

const findMissingNumber = (array) => {
    let sum = 0;
    let index = 0;
    let totalSum = 0;
    array = Array.from(new Set(array));
    while(index < array.length) {
        sum += array[index++];
    }
    index = 0;
    while(index < sum) {
        totalSum += index;
        index++;
    }
    return Math.abs(totalSum - sum);

}

// const array = [1, 3, 3];
const array = [2, 2];
console.log(findMissingAndRepeating(array));