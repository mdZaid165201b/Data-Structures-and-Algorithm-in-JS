const reverseStringByWords = (string) => {
  string = string.split(" ");
  string = string.filter(current => current !== "");
  let left = 0;
  let right = string.length - 1;
  while (left < right) {
    console.log(string)
    let leftWord = string[left];
    string[left] = string[right];
    string[right] = leftWord;
    left++;
    right--;
  }
  return string.join(" ");
};

const string = "the sky is blue";
// const string = "  hello world  ";
console.log(reverseStringByWords(string));
