function solution(statues) {
    let sortedArray = [...statues];
    sortedArray.sort();
    let count = 0;
    for(let i = sortedArray[0]; i <= sortedArray[sortedArray.length -1]; i++){
        if(!statues.includes(i)){ count++; } 
    }
    return count;
}
