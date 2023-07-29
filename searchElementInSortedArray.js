const searchElementInSortedArray = (array, start, end, target) => {
    let middle = Math.floor((start + end) / 2);
    if(array[middle] === target) {
        return array[middle];
    }
    if(array[start] <= array[middle]) {
        if(target >= array[start] && target <= array[middle]) {
            return searchElementInSortedArray(array, start, middle - 1, target);
        }
        return searchElementInSortedArray(array, middle + 1, end, target);
    }
    
    if(target >= array[middle] && target <= array[end - 1]) {
        return searchElementInSortedArray(array, middle + 1, end - 1, target);
    }
    return searchElementInSortedArray(array, start, middle - 1, target);
}

const array = [5, 6, 7, 8, 9, 10, 1, 2, 3];
console.log(searchElementInSortedArray(array, 0, array.length, 3));