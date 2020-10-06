const arr = [];

const arrayEl = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB',
]

console.log(arrayEl.length);

// get first item 
console.log(arrayEl[0]);

// get middle item
const middleIndex = Math.floor(arrayEl.length / 2);
console.log(arrayEl[middleIndex]);

// get last item
console.log(arrayEl[arrayEl.length - 1]);

/* 5 . Declare an array called mixedDataTypes, 
put different data types in the array and find the length of the array.
 The array size should be greater than 5 */

const mixedDataTypes = [2, 'string', [1, 2], {
    name: "sandy"
}, true, null, 3.14];
console.log(mixedDataTypes.length)

/*
    6. Declare an array variable name itCompanies and
    assign initial values Facebook, Google, Microsoft,
    Apple, IBM, Oracle and Amazon
*/

const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log(itCompanies);
console.log(itCompanies.length);

/* 
    Print the first company, middle and last company
*/

console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(itCompanies.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);

// Change each company name to uppercase one by one and print them out

itCompanies.map(company => {
    console.log(company.toUpperCase())
})

/* 
    Print the array like as a sentence: Facebook, 
    Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
*/

console.log(itCompanies.join(', '), 'are big IT companies.')

/* 
    Check if a certain company exists in the itCompanies array.
     If it exist return the company else return a company is not found
*/

const searchText = "IBMs";
if (itCompanies.includes(searchText)) {
    console.log(searchText);
} else {
    console.log(searchText, 'is not found');
}

/* 
    Filter out companies which have more than one 'o' without the filter method
*/

const filteredCompany = [];
itCompanies.forEach(company => {
    if (company.indexOf('o') < company.lastIndexOf('o')) {
        filteredCompany.push(company);
    }
})
console.log(filteredCompany);

// Sort the array using sort() method

console.log(itCompanies.sort());

// Reverse the array using reverse() method
console.log(itCompanies.reverse());

// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));

// Slice out the last 3 companies from the array
console.log(itCompanies.slice(itCompanies.length - 3));

// Slice out the middle IT company or companies from the array
console.log(itCompanies[(Math.floor(itCompanies.length / 2))]);

// Remove the first IT company from the array
// console.log(itCompanies.shift());

// Remove the middle IT company or companies from the array
console.log(itCompanies.splice(Math.floor(itCompanies.length / 2), 1));

// Remove the last IT company from the array
console.log(itCompanies.pop());

// Remove all IT companies
console.log(itCompanies.splice(0, itCompanies.length));
console.log(itCompanies)