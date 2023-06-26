// using closure!!!
const array = [
    [1, 2],
    [3, 4],
    [5, 6, 7, [8, 9]],
    [10, 11],
]

const flatArray = () => {
    const newArray = [];
    const internal = (array) => {
        array.forEach((current, index) => {
            if(Array.isArray(current)) {
                internal(current);
            }
            else {
                newArray.push(current);
            }
        })
        return newArray;
    }
    return internal;
}

const flattenFunction = flatArray();
console.log(flattenFunction(array))


flatArray(array);