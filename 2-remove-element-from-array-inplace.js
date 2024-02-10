const removeElementFromArrayInPlace = (array, value) => {
    let endIndex = array.length - 1;
    let lastIndex = array.length - 1;

    while(endIndex >= 0) {
        if(array[endIndex] === value) {
            
            if(lastIndex !== endIndex) {
                const value = array[lastIndex];
                array[lastIndex] = '_';
                array[endIndex] = value;
                lastIndex--;
                endIndex--;
            }
            else {
                array[lastIndex] = '_';
                endIndex--;
                lastIndex--;
            }
        }
        else endIndex--;
    }
    console.log(array, 'array ::');
}

const array = [3,2,2,3];

removeElementFromArrayInPlace(array, 3);