 const fs = require('fs'); 
 const exportUnique =  require('./task_2_1')

let rawdata = fs.readFileSync('task2.json'); 
let persons = JSON.parse(rawdata); 
let data = JSON.stringify(exportUnique.unique(persons), null, 2); 
fs.writeFileSync('task2_solution.json', data); 
