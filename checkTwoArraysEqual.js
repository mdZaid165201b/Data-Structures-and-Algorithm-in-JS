const checkArraysEqual = (array1, array2) => {
    if(array1.length !== array2.length) return false;
    const hashMap = {};
    for(let i = 0; i < array1.length; i++) {
        hashMap[array1[i].toString()] = array1[i];
    }
    console.log(hashMap);
    for(let i = 0; i < array2.length; i++) {
        console.log(hashMap[array2[i]])
        if(!hashMap.hasOwnProperty(array2[i])) return false;
    }
    return true;
}

const array1 = [1,2,5,4,0];
const array2 = [2,4,5,0,1];

console.log(checkArraysEqual(array1, array2));
