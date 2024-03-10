const rotateArrayByKPlaces = (array, k) => {
    while(k > 0) {
        let endElement = array[array.length - 1];
        for(let i = array.length - 2; i >= 0; i--) {
            array[i + 1] = array[i];
        }
        array[0] = endElement;
        k--;
    }
    console.log('array after rotation', array);
}

const array = [1,3,5,7,9];
rotateArrayByKPlaces(array, 2);