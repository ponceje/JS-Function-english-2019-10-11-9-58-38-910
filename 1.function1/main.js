function reverseString(message){
  // wirte your code here
  var msg=message;
  var reverse ='';//initialized reverse with empty string
  for (var i = msg.length-1 ; i >=0; i--) {//craeted for loop that starts on the last index of the string
  	reverse = reverse + msg[i]//extract the character and add it into a string starting with the last index
  }
  return reverse;//return with the reverse string
}
// should return 'olleh'
console.log(reverseString('hello'));//output is 'olleh'