

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


// optimized approach

const optimized_inversion_counter = (array) => {
    const map = new Map();
    // populate map with array values as key value pairs
    for(const index in array) {
        map.set(array[index], { index, value: array[index] });
    };

    // check values in map and perform action accordingly
    let count = 0;
    let index = 0;
    let temp = index;
    while(index < array.length) {
        if(temp === array.length - 1) {
            index++
            temp = index;
            continue;
        }
        if(array[index] > map.get(array[temp + 1]).value && index < temp + 1) {
            count++;
            temp++;
        }
        else {
            temp++;
        }
    }
    return count;
}


const array = [2, 4, 1, 3, 5];
const array1 = [2, 3, 4, 5, 6];
const array2 = [10, 10, 10];


console.log(inversionCounter(array2));
console.log(optimized_inversion_counter(array2));