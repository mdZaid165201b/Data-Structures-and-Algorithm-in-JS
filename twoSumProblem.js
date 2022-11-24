//For example, if the array is [3, 5, 2, -4, 8, 11] and the sum is 7, your program should return [[11, -4], [2, 5]] because 11 + -4 = 7 and 2 + 5 = 7.

// time complexity for this approach is O(n^2);

function twoSumProblem(arr, sum){
  const pairArray = [];
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      arr[i] + arr[j] === sum ? pairArray.push([arr[i],arr[j]]) : null;
    }
  }
  return pairArray;
}

console.log(...twoSumProblem([3, 5, 2, -4, 8, 11], 7));
