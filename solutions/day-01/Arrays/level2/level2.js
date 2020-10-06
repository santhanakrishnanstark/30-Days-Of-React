/*
First remove all the punctuations and 
change the string to array and count the number of words in the array
*/
let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

const str = text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "");
const word = str.split(" ");
console.log(word.length);

// In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

if (shoppingCart[0] !== 'Meat') {
    shoppingCart.unshift('Meat');
}
console.log(shoppingCart);

if (shoppingCart[shoppingCart.length - 1] !== 'Sugar') {
    shoppingCart.push('Sugar');
}
console.log(shoppingCart);

const indexOfHoney = shoppingCart.indexOf('Honey');
shoppingCart.splice(indexOfHoney, 1);
console.log(shoppingCart);

const indexOfTea = shoppingCart.indexOf('Tea');
shoppingCart[indexOfTea] = 'Green Tea';
console.log(shoppingCart);

/* 
In countries array check if 'Ethiopia' exists in the array if it exists
 print 'ETHIOPIA'. If it does not exist add to the countries list.
*/

const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
]

// search Ethiopia
if (countries.indexOf('Ethiopia') !== -1) {
    console.log(countries[countries.indexOf('Ethiopia')].toUpperCase());
} else {
    countries.push('Ethiopia');
}

/*
In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. 
If it does not exist add Sass to the array and print the array.
*/

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

// search sass
if (webTechs.indexOf('Sass') !== -1) {
    console.log(webTechs[webTechs.indexOf('Sass')].toUpperCase());
} else {
    webTechs.push('Sass');
}
console.log(webTechs);

// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']

const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);