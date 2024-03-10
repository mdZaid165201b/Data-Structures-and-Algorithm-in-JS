const maxSubArrayProduct = (array) => {
    let max = 0;
    for(let i = 0; i < array.length - 1; i++) {
        let tempProduct = array[i];
        for(let j = i + 1; j < array.length; j++) {
            tempProduct = tempProduct * array[j];
            if(tempProduct === 0) break;
            else if (tempProduct >= max) max = tempProduct;
        }
    }
    console.log('maxSubarray Product', max);
}

// const array = [2,3,-2,4];
// const array = [-2, 0, -1];
const array = [6,-3,-10, 0, 2];

maxSubArrayProduct(array);