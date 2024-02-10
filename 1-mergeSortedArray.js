const mergeSortedArray = (array1, array2) => {
    let lastIndex = array1.length - 1;
    let array1LastElementIndex = array1.findIndex(currentElement => currentElement === 0) - 1;
    let array2LastElementIndex = array2.length - 1;

    while(array2LastElementIndex >= 0) {
        
        if(array1[array1LastElementIndex] <= array2[array2LastElementIndex]) {
            array1[lastIndex] = array2[array2LastElementIndex];
            array2LastElementIndex--;
            lastIndex--;
        }
        else if (array1[array1LastElementIndex] > array2[array2LastElementIndex]) {
            
            array1[lastIndex] = array1[array1LastElementIndex];
            array1LastElementIndex--;
            lastIndex--;
        }
    }
    return array1;
}

const array1 = [1,2,3,0,0,0];
const array2 = [2,5,6];

console.log(mergeSortedArray(array1, array2));