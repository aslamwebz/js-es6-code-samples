let word1 = "dylan";
let word2 = "israel";

// const fullname = word1 + " " +word2;
// console.log('fullname');


//Template Literals ``

// const fullname = `${word1} ${word2}`;

let examples = `
${word1}
${word2}
`;

// console.log(fullname);

document.getElementById('text').innerText = examples;