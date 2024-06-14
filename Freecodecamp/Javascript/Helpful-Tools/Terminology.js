let character = "Hello"; // "let" defines variable "character" as "Hello"
let profession = "teacher";
let age;
console.log(age); // logs variable to the console
console.log(profession); 

/*
Multi
Line
Comment
*/

let character = 'Hello';
let count = 8;
console.log(count + 1); // Mathematical console log
console.log(count * 20); // Mathematical console log
console.log(count / 34); // Mathematical console log
console.log(count - 438) // Mathematical console log



let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
console.log(rows[0]);
console.log(rows[2]);
rows[3] = ["10"];


// Array mutations


let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

console.log(rows);

let cities = ["London", "New York", "Mumbai"];

console.log(cities);

cities[cities.length - 1] = "Mexico City";

console.log(cities);


// Push to the end of an array .push
let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");

console.log(rows);

// Pop last variable .pop


/* You should have seen "freeCodeCamp" printed to the console. 
This is because .pop() returns the value that was removed from the array - 
and you pushed "freeCodeCamp" to the end of the array earlier. */

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];
rows.push("freeCodeCamp");
let popped = rows.pop();
console.log(popped);
console.log(rows);

//  Push to assiggn existing push to a new pushed variable and log

/* Were you expecting to see 4 in the console? 
.push() returns the new length of the array, 
after adding the value you give it. */

let character = 'Hello';
let count = 8;
let rows = ["Naomi", "Quincy", "CamperChan"];

rows.push("freeCodeCamp");
let pushed = rows.push();
console.log(pushed);
let popped = rows.pop();
console.log(popped);
console.log(rows);


// Const can not be reassigned
// Let can be reassigned

// For loops

// iteration; condition; 

for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}


// for...of loop

const character = "#";
const count = 8;
const rows = [];

// Populate the rows array
for (let i = 0; i < count; i = i + 1) {
    rows.push(i);
}

let result = ""; // Initialize the result variable

// Iterate through the rows array using a for...of loop and concatenate the row value to result
for (const row of rows) {
    result = result + row; // Concatenate the row value to result
}

console.log(result); // This will print the concatenated result


// 
