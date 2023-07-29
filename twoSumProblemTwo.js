const twoSum = (array, target) => {
    let left = 0;
    let right = array.length - 1;
    const pairArray = [];
    let counter = array.length;
    while(counter) {
        if(left === right) {
            counter--;
            left++;
            right = array.length - 1;
        }
        else {
            if(array[left] + array[right] === target) {
                pairArray.push([array[left], array[right]])
                counter--;
                left++;
                right = array.length - 1;
                continue;
            }
            else { right--; }
        }
    }
    return pairArray;
}
// const output = twoSum([3, 5, 2, -4, 8, 11], 7);
const output = twoSum([2,7,11,15], 9);
console.log(output)