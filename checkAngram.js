//  check angram

let checkAngram = (string1, string2) => {
  
  if(string1.length !== string2.length){ return false; }
  else{
    string1 = string1.split("");
    string2 = string2.split("");
    string1.sort();
    string2.sort();
    
    for(let index in string1){
      if(string1[index] !== string2[index]){ return false; }  
    }

    return true;
  }
}

checkAngram("binary","bainyr") ? console.log("Angram!!!") : console.log("Not Angram!!!"); 
checkAngram("zaid","zbbd") ? console.log("Angram!!!") : console.log("Not Angram!!!"); 


let checkAngramSecond = (str1, str2) => {
  if(str1.length !== str2.length){ return false; }
  else{
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    str1 = Array.from(str1).sort();
    str2 = Array.from(str2).sort();
    if(str1.join("") == str2.join("")){ return true; }
    else{ return false; }
  }
  
}
console.log(checkAngramSecond("binary", "baniry"));
