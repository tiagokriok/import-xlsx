import xlsx from 'xlsx';

const workbook = xlsx.readFile('testeAPI.xlsx');

const worksheet = workbook.Sheets[workbook.SheetNames[0]];

// console.log(workbook.SheetNames.length);

console.log(xlsx.utils.sheet_to_json(worksheet));
