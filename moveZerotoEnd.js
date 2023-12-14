const moveZerotoEnd = (array) => {
    let left = 0;
    let right = array.length - 1;
    while(left <= right) {
        if(array[left] === 0 && array[right] === 0) {
            console.log("if ::")
            right--;
        }
        else if(array[left] === 0 && array[right] !== 0) {
            console.log("else if ::")
            let temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
        else if(array[left] !== 0 && array[right] === 0) {
            console.log("else if ::");
            right--;
        }
        else {
            console.log("else ::");
            left++;
        }
    }
    return array;
}
const array = [8,5,0,10,0,20];
console.log(moveZerotoEnd(array));