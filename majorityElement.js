const majorityElement = array => {
    const hashMap = {};
    let majorityElement;
    for(const element of array) {
        if(hashMap.hasOwnProperty(element)) hashMap[element] += 1;
        else hashMap[element] = 0
    }
    console.log(hashMap)
    for(const element of array) {
        // console.log(Math.floor(array.length / 2))
        if(hashMap[element] >= Math.floor(array.length / 2)) {
            return  element
        }
    }
}

// const array = [1,2,3]
const array = [3,1,3,3,2]
console.log(majorityElement(array))