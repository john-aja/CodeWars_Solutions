// Return the number (count) of vowels in the given string.


function getCount(str) {
  let vowelsCount = 0;
  const vowels = "aeiou"
  for(let i=0; i<str.length; i++){
    if(vowels.indexOf(str[i]) > -1){
      vowelsCount ++
    }
  }  
  return vowelsCount;
}