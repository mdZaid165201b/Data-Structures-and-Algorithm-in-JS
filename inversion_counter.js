

const inversionCounter = (array) => {
    let count = 0;
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] > array[j] && i < j) {
                count++;
            }
        }
    }
    return count;
};




const array = [2, 4, 1, 3, 5];
const array1 = [2, 3, 4, 5, 6];
const array2 = [10, 10, 10];


console.log(inversionCounter(array2));