function sortArray(array) {
    return array.sort((a, b) =>{
        return a - b;
    })
}
function solution(statues) {
    let sortedArray = [...statues];
    sortedArray = sortArray(statues);
    let count = 0;
    for(let i = sortedArray[0]; i <= sortedArray[sortedArray.length -1]; i++){
        if(!statues.includes(i)){ count++; } 
    }
    return count;
}
