function alphabetSort(message){
  var alphaSort = message.split('');//split every character of the string and add it into list of data of an array
  return alphaSort.sort().join('');//sort the string automatically in alphabetical order with the help of sort function and use join function to compile them into a string
}
console.log(alphabetSort('hello')); // should return 'ehllo'