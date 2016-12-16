var userWord = prompt("Enter any word you'd like");
var wordlength = userWord.length;
var thirdCharacter = userWord.charAt(2);
var subword = userWord.substr(1, 4);
var example = ""+userWord+", that's a really cool word!";

// putting it all together
alert("You entered: "+ userWord +"\n" + "There are "+ wordlength + " characters in the word." +"\n"
+ "The third character is "+ thirdCharacter + "\n" + "Lowercase: "+userWord.toLowerCase() + "\n"
+ "Uppercase: "+"\n" + userWord.toUpperCase() + "\n" + example + "\n" + "Subword: " + subword);
