const reverseArrayinGroups = (array, size) => {
    if(array.length % size === 0) {
        let leftIndex = 0;
        let rightIndex = size;
        for(let i = 0; i < array.length / size; i++) {
            const subArray = array.slice(leftIndex, rightIndex);
            let startIndex = leftIndex;
            let endIndex = rightIndex - 1;
            let lIndex = 0;
            let rIndex = size - 1
            while(startIndex < endIndex) {
                const temp = subArray[lIndex];
                array[startIndex] = subArray[rIndex];
                array[endIndex] = temp;
                startIndex++;
                endIndex--;
                lIndex++;
                rIndex--;
            }
            leftIndex = rightIndex;
            rightIndex += 3;   
        }
        return array;
    }
    else {
        if(array.length <= size) {
            array = array.reverse();
            return array;
        }
        else {
            // remaining!!!
        }
    }
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const reverse = reverseArrayinGroups(array, 3);
console.log(reverse)