function countWords(message){
  var words = message.split(' ');//split the string with spaces and add them into the arraylist

  return words.length;//return with the length of the array
}
console.log(countWords('Good morning, I love JavaScript.')); // should return 5