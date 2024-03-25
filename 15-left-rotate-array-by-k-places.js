// statement left rotate array by k places


// Space Complexity = O(N) Time Complextity = O(N)
const leftArrayBykPlaces = (array, k) => {
    let temp = [];
    for(let i = 0; i < k; i++) {
        temp[i] = array[i];
    }

    for(let start = k; start < array.length; start++) {
        array[start - k] = array[start];
    }

    let index = 0;
    for(let startIndex = array.length - k; startIndex < array.length; startIndex++) {
        array[startIndex] = temp[index];
        index++;
    }

    return array
}

const reverseArray = (array, startIndex, endIndex) => {
    while(startIndex < endIndex) {
        let temp = array[startIndex];
        array[startIndex] = array[endIndex - 1];
        array[endIndex - 1] = temp;
        startIndex++;
        endIndex--;
    }

    // console.log(array);
    
}

const optimalLeftRotateArrayBykPlaces = (array, k) => {
    reverseArray(array, 0, k);
    reverseArray(array, k, array.length);
    reverseArray(array, 0, array.length);

    return array;
}


const array = [1,2,3,4,5,6,7];

console.log(optimalLeftRotateArrayBykPlaces(array, 2));