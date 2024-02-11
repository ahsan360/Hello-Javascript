const fs = require('fs'); 
const jsonString = fs.readFileSync('test.json', 'utf-8');

const jsonData = JSON.parse(jsonString);

key = Object.keys(jsonData.calendar)
console.log(key);

