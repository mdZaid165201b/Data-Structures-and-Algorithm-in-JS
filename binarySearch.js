const binarySearch = (array, start, end, num) => {
        if(start > end) return null;
        const middle = Math.floor((start + end) / 2);
        console.log(array[middle])
        if(array[middle] === num) {
            return middle;
        }
        if(array[middle] > num) {
            return  binarySearch(array, start, middle - 1   , num);
        }
        if(array[middle] < num) {
            return binarySearch(array, middle + 1, end, num);
        }
}

const array = [10,20,30,40,50,60,70,80,90];
console.log(binarySearch(array, 0, array.length - 1, 90));