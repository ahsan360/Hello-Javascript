const fs = require('fs');
const jsonString = fs.readFileSync('bulilder.json', 'utf-8');

const jsonData = JSON.parse(jsonString);
key = Object.keys(jsonData.data['ad19d626-d09f-46d2-ad61-322049f14aa5'])
console.log(jsonData.data['ad19d626-d09f-46d2-ad61-322049f14aa5'])