const fs = require('fs');
var args = process.argv.slice(2);
var inputArray = fs.readFileSync(args[0]).toString().split("\n");

let total = 0;
// Define a mapping from string representations to numbers
const numberWords = new Map([
    ['one', '1'],
    ['two', '2'],
    ['three', '3'],
    ['four', '4'],
    ['five', '5'],
    ['six', '6'],
    ['seven', '7'],
    ['eight', '8'],
    ['nine', '9'],
]);
  
for(let row of inputArray){
    // The hardest edge case to consider is oneight or eightwo type inputs... 
    let result = row;
    numberWords.forEach((value, key) => {
        let regex = new RegExp(key, "g");
        result = result.replace(regex, (match) => {
            // Replace each character of the word with the corresponding number
            return insert(match, match.length-1, value);
        });
    });
    
    // oneight is now on1eigh8t aka all words are now numbers, positioned accordingly
    // which allows us to strip out all non numerics, and return first/last after that
    result = removeNonNumbers(result);
    let lVal = result[0];
    let rVal = result[result.length-1];

    let rowTotal = lVal + rVal;
    console.log(rowTotal);
    total += Number(rowTotal)
}
  
function insert(str, index, value) {
    return str.substr(0, index) + value + str.substr(index);
}

function removeNonNumbers(inputString) {
    return inputString.replace(/\D/g, '');
}

console.log('total: ' + total);