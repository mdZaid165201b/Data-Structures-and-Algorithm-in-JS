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
