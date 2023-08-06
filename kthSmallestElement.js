const findKthSmallestElement = (array, k) => {
    let minimum = findMinimum(array);
    console.log({minimum});
    for(let i = 0; i < k - 1; i++) {
        minimum = findMinimum(array, minimum);
    }
    console.log({minimum}, "final")
    
}

const findMinimum = (array, except = null) => {
    let min = Number.MAX_VALUE;
    for(let value of array) {
        if(value === except) continue;
        if(value < min) {
            if(value < except) continue;
            min = value;
        }
    }
    return min;
}

// using sorting with O(n) time complexity
const findKthSmallestElementWithSorting = (array, k) => {
    const sortedArray = [... array].sort((a, b) => a - b);
    return sortedArray[k  - 1];
}

const array = [7, 10, 4, 3, 20, 15];
console.log(findKthSmallestElementWithSorting(array, 3));
console.log(findKthSmallestElement(array, 3));