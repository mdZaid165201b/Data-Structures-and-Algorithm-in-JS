const findLeaders = (array) => {
    const leaders = [];
    for(let i = 0; i < array.length - 1; i++) {
        let isMax = true;
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] <= array[j]) {
                isMax = false;
                break;
            }
        }
        if(isMax) leaders.push(array[i]);
    }
    if(array.length > 0) leaders.push(array[array.length - 1])
    console.log('leaders ::: ', leaders);
}

// const array = [16, 17, 4, 3, 5, 2];
// const array = [1, 2, 1];
const array = [2,2];


findLeaders(array);