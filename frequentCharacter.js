// IMPORTANT

let frequentCharacter = (str) => {
  let set = Array.from(new Set(str));
  set = set.map((elem,index) =>{
    if(isNaN(elem)){ return elem; }
  })
  let frequent = "";
  let count = 0;
  for(let i = 0; i < set.length; i++){
    let temp = 0;
    for(let j = 0; j < str.length; j++){
      if(set[i] === str[j]){ ++temp; }
    }
    if(temp > count){
      frequent = set[i];
      count = temp;
    }
  }
  return frequent;

}

console.log(frequentCharacter("abcddefda1111133333333"));
console.log(frequentCharacter("AA0AB0BB0ccc0aa0aw00wo0BBBw123123"));
