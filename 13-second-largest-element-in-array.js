// statement: Find Second largest element in an array

const findSecondLargestElement = (array) => {
    let secondMax = Number.NEGATIVE_INFINITY;
    let largestELement =  Number.NEGATIVE_INFINITY;

    for(let i = 0; i < array.length; i++) {
        if(array[i] > largestELement) {
            secondMax = largestELement;
            largestELement = array[i];
        }
    }
    
    return secondMax;
}

// const array = [10, 20, 4];
const array = [20, 10, 20, 4, 100];

console.log(findSecondLargestElement(array));