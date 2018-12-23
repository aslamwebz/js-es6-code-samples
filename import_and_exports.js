//import and export


export const data = [1,2,3];


//import 


import {data} from './import_and_exports.js';

let updatedData = data;

data.push(5);

console.log(updatedData);