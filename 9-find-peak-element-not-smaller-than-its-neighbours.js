// statement: Find a peak element which is not smaller than its neighbours

const findPeakElement = (array) => {
    const peakElements = [];

    if(array.length === 0) peakElements.push(null);
    
    else if (array.length === 1) peakElements.push(array[0]);

    else {
        for(let i = 1; i < array.length - 1; i++) {
            if(array[i] > array[i - 1] && array[i] > array[i + 1]) peakElements.push(array[i]);
        }
    }
    
    return peakElements;
}

// const array = [5, 10, 20, 15];
const array = [10, 20, 15, 2, 23, 90, 67];
console.log(findPeakElement(array));;