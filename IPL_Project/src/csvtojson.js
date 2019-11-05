let csvToJson = require('convert-csv-to-json');
const convertMyFile =(filename)=>{
let jsonData = csvToJson.fieldDelimiter(',').formatValueByType().getJsonFromCsv(filename);
return jsonData;
}
console.log(convertMyFile("../ipl/deliveries.csv"));
//module.exports = {convertMyFile} 
