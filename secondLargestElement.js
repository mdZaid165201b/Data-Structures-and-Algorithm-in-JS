const secondLargestElement = (array) => {
    let sortedArray = Array.from(new Set(array.sort((a , b) => a - b)));
    return sortedArray[sortedArray.length - 2];
}

const array = [12, 35, 1, 10, 34, 1];
console.log(secondLargestElement(array));