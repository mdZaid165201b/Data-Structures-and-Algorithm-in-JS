// const removeDuplicatesFromSortedArray = (array) => {
//     let startIndex = 0;
//     let nestedStartIndex = 0;

//     while(startIndex < array.length - 1) {
//         nestedStartIndex++;
//         while(array[startIndex] === array[nestedStartIndex]) {
//             array[nestedStartIndex] = '_';
//             nestedStartIndex++;
//         }
//         startIndex = nestedStartIndex;
//         nestedStartIndex = startIndex;
//     }

    

//     console.log(array, 'array');
// }






const removeDuplicatesFromSortedArray = (array) => {
    let leftPointer = 1;
    let rightPointer = 1;

    while(rightPointer < array.length) {
        if(array[rightPointer] !== array[rightPointer - 1]) {
            array[leftPointer] = array[rightPointer];
            leftPointer++;
            rightPointer++;
        }
        else {
            rightPointer++;
        }
    }
    for(let i = array.length - leftPointer; i < array.length; i++) array[i] = '_';


    console.log(array, 'array');
}

// const array = [1,1,2]; // [0,0,1,1,1,2,2,3,3,4]
const array = [0,0,1,1,1,2,2,3,3,4];

removeDuplicatesFromSortedArray(array);