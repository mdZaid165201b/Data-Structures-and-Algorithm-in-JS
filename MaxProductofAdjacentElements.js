function solution(inputArray) {
    let max = inputArray[0] * inputArray[1];
    for(let i = 0; i < inputArray.length - 1; i++){
        if(inputArray[i] * inputArray[i+1] > max){ max = inputArray[i] * inputArray[i+1]  }
    }
    return max;
}
