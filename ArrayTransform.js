const trasformArray = (arr1) => {
  const arr2 = [];
  for (let i = 0; i < arr1.length; i++) {
    if (i === 0) { arr2.push(0 + arr1[i] + arr1[i + 1]) }
    else if (i === arr1.length - 1) { arr2.push(arr1[i-1] + arr1[i] + 0) }
    else { arr2.push(arr1[i - 1] + arr1[i] + arr1[i + 1]) }
  }
  
  return arr2;
}

console.log(trasformArray([4,0,1,-2,3]))
