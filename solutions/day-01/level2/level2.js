/*
First remove all the punctuations and 
change the string to array and count the number of words in the array
*/
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const str = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
const word = str.split(" ");
console.log(word.length);