const findIndexesOfSubArrayGivenSum = (array, num) => {
    let startIndex = 0;
    let rightIndex = 0;
    const indeces = [];
    let isFound = false;

    for(let i = 0; i < array.length; i++) {
        startIndex = i + 1;
        rightIndex = i;
        let sum = 0;
        console.log({i});
        console.log({startIndex});
        console.log({rightIndex});

        while(sum !== num && rightIndex < array.length) {
            sum += array[rightIndex];
            console.log({sum});
            if(sum === num) {
                rightIndex += 1
                indeces.push(startIndex, rightIndex + 1);
                isFound = true;
                break;
            }
            else if(sum > num) {
                break;
            }
            else rightIndex++; 
        }
        if(isFound) break;
    }
    console.log(startIndex, rightIndex);
}

// const array = [1,2,3,7,5];
const array = [1,2,3,4,5,6,7,8,9,10];
findIndexesOfSubArrayGivenSum(array, 15);