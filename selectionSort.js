const selectionSort = (array) => {
    
    for(let i = 0; i < array.length - 1; i++) {
        let minimumIndex = i;
        for(let j =  i + 1; j < array.length; j++) {
            if(array[j] < array[minimumIndex]) {
                minimumIndex = j;
            }
        }
        let temp = array[i];
        array[i] = array[minimumIndex];
        array[minimumIndex] = temp;
    }
    return array;
}

const array = [10, 50, 5, 4, 3, 2, 1];
selectionSort(array);
console.log(array);