// Important Question

let arr = [4,5,6,7,4,8,9,7];
let uniqueNumbers = Array.from(new Set(arr));
console.log(uniqueNumbers);
let UniqueObj = {};

uniqueNumbers.forEach((elem, index) => {
  UniqueObj[elem] = 0;
})

for(let i = 0; i < uniqueNumbers.length; i++){
  for(let j = 0; j < arr.length; j++){
    if(uniqueNumbers[i] == arr[j]){
      UniqueObj[uniqueNumbers[i]] += 1; 
    }
  }
}

console.log(UniqueObj);
