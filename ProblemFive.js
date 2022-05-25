// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.



function duplicateCount(text){
    var myObj = {},
        counter = 0;    
    

    for(var i = 0; i < text.length; i++){   
        var word = text.toLowerCase()
      if(!myObj[word[i]]){
       
        myObj[word[i]] = 1;
      } 
      else if(myObj[word[i]] < 2){
          myObj[word[i]]+=1;
          counter++;
      }    
    }
    return counter;
}