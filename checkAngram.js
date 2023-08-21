const checkAngram = (string1, string2) => {
    if(string1.length !== string2.length) return false;
    string1 = string1.split("").sort();
    string2 = string2.split("").sort();
    for(let i = 0; i < string1.length; i++){
        if(string1[i] !== string2[i]) return false;
    }
    return true;
}

const checkAngramSecond = (string1, string2) => {
    const hashMap = {};
    const hashMap2 = {};
    if(string1.length !== string2.length) return false;
    for(let i = 0; i < string1.length; i++){
        if(!hashMap[string1[i]]) {
            hashMap[string1[i]] = 1
            hashMap2[string2[i]] = 1
        }
        else {
            hashMap[string1[i]] = hashMap[string1[i]]++;
            hashMap2[string1[i]] = hashMap2[string1[i]]++;
        }
    }
    for(let i = 0; i < string1.length; i++) {
        if(hashMap[string1[i]] !== hashMap2[string2[i]]) return false;
    }
    return true;
    
}


console.log(checkAngramSecond("listen", "silent"))