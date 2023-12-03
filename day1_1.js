const fs = require('fs');
var args = process.argv.slice(2);
var inputArray = fs.readFileSync(args[0]).toString().split("\n");

let total = 0;

for(let row of inputArray){
    row = row.replace(/\D/g, '');

    let lVal = row[0];
    let rVal = row[row.length-1];

    let rowTotal = lVal + rVal;
    total += Number(rowTotal)
}

console.log('total: ' + total);