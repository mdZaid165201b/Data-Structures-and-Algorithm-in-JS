// const removeDuplicatesFromSortedArray = (array) => {
//     let countElement = 1;
//     let leftPointer = 1;
//     let rightPointer = 1;

//     while(rightPointer < array.length) {
//         if(array[rightPointer] === array[rightPointer - 1]) {
//             countElement++;
//             if(countElement < 3) {
//                 leftPointer++;
//                 rightPointer += 1;
//                 // if(leftPointer === rightPointer) rightPointer++;
//             }
//             else rightPointer++;
//         }
//         else {
//             array[leftPointer] = array[rightPointer];
//             countElement = 1;
//             leftPointer++;
//             rightPointer++;
//         }
//     }
//     console.log(array, 'array');
    
//     for(let i = leftPointer; i < rightPointer; i++) array[i] = '_';
    
//     console.log(array, 'array');
// }



const removeDuplicatesFromSortedArray = (array) => {
    let leftPointer = 1;
    let rightPointer = 1;
    let countElement = 1;

    while(rightPointer < array.length) {
        if(array[rightPointer] === array[rightPointer - 1]) {
            countElement++;
            if(countElement < 3) {
                if(leftPointer !== rightPointer) array[leftPointer] = array[rightPointer];
                leftPointer++;
                rightPointer++;
            }
            else {
                let endIndex = rightPointer + 1;
                let start = rightPointer + 1;
                while(array[start] === array[start - 1]) {
                    endIndex++;
                    start++
                }
                rightPointer = endIndex;
            }
        }
        else {
            if(leftPointer === rightPointer) {
                leftPointer++;
                rightPointer++;
                countElement = 1;
            }
            else {
                array[leftPointer] = array[rightPointer];
                leftPointer++;
                rightPointer++;
                countElement = 1;
            }
        }
    }

    for(let i = leftPointer; i < array.length; i++) array[i] = '_';
    
    console.log(array, leftPointer,'array');

}

// const array = [1,1,1,2,2,3];
const array = [0,0,1,1,1,1,1,2,2,3,3,3];
removeDuplicatesFromSortedArray(array);