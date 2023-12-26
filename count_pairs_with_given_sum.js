const countPairOfGivenSum = (array, sum) => {
    // here I take map for storing value of array with their respective index
    const map = new Map();
    for(const index in array) {
        map.set(parseInt(index), array[index]);
    }
    console.log(map, 'map :::');
    // here I will loop through to an array and check
    let count = 0;
    let index = 0;
    let temp = index + 1;
    while(index < array.length - 1) {
        if(temp === array.length) {
            index++;
            temp = index + 1;
            continue;
        }
        if(array[index] + array[temp] === sum) {
            count++;
            temp++;
        }
        else temp++;
    }
    return count;
}


const array = [1, 5, 7, 1]
const array1 = [1, 1, 1, 1];

console.log(countPairOfGivenSum(array, 6));