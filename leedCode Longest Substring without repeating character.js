/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (str) {
    let max = 0;
  let l = 0;
  let r = 0;
  let set = new Set();
  for(let i = 0; i < str.length; i++){
    if(!set.has(str[i])){
      set.add(str[i]);
      max = set.size > max ? set.size: max;
      r++;
    }
    else{
      while(str[l] !== str[i]){
        set.delete(str[l]);
        l++;
      }
      set.delete(str[l]);
      set.add(str[l]);
      l++;
      max = set.size > max ? set.size : max;
      r++;
    }
  }
  console.log(set)
  return max
};
