const leadersInArray = array => {
    const leaders = [];
    let isValid = true;
    for(let i = 0; i < array.length; i++) {
        for(let j = i + 1; j < array.length; j++) {
            if(array[i] < array[j]) {
                isValid = false;
                break;
            }
        }
        if(isValid) leaders.push(array[i]);
        else { isValid = true; }
    }
    console.log(leaders)

}

// const array = [16,17,4,3,5,2];
const array = [1,2,3,4,0];
console.log(leadersInArray(array))