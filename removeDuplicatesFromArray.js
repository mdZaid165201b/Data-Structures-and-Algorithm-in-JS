// this is not the best approach to remove duplicates from an unsorted array

let arr = [1,2,2,4,5,4];

for(let i = 0; i < arr.length; i++){
    for(let j = i+1; j < arr.length; j++){
        if(arr[i] == arr[j]){
            for(let k = j; k < arr.length; k++){
                arr[k] = arr[k+1];
            }
        }
    }
}

let count = 0;
arr.forEach((elem, index) =>{
    if(arr[index] == undefined) count++;
})

for(let i = 0; i < count; i++){ arr.pop(); }


console.log(arr, " ", count);


