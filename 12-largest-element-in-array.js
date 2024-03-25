// statement: Find Largest Element in an Array

const findLargestElement = (array) => {
    let max = Number.NEGATIVE_INFINITY;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > max) max = array[i];
    }

    return max;
}
// const array = [10, 20, 4];
const array = [20, 10, 20, 4, 100];

console.log(findLargestElement(array));