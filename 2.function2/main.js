function palindrome(message){
  var palindromeString = message; //initialize string with the param value
  var reverse = '';//initialize string with empty string
  
  for (var i = palindromeString.length-1 ; i >=0; i--) {//craeted for loop that starts on the last index of the string
  	reverse = reverse + palindromeString[i]//extract the character and add it into a string starting with the last index
  }
  
  return reverse == palindromeString;//return boolean value if params is same with reversed string
}
console.log(palindrome('hello')); // should return false
console.log(palindrome('abcba')); // should return true