// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.




function duplicateEncode(word){
  var charactersCount = {};
  var characters = word.toLowerCase().split('');

  characters.forEach(function(character) {
    charactersCount[character] = (charactersCount[character] || 0) + 1;
  });

  return characters.map(function(character) {
    return charactersCount[character] === 1 ? '(' : ')';
  }).join('');
 }