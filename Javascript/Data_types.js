// Question 1.
//  Declare variables and assign values
let firstName = "John";
let lastName = "Doe";
let country = "USA";
let city = "New York";
let age = 25;
let isMarried = false;
let year = 2024;

// Check different data types
console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof country); // string
console.log(typeof city); // string
console.log(typeof age); // number
console.log(typeof isMarried); // boolean
console.log(typeof year); // number

// Question 2. Check if type of '10' is equal to 10
console.log(typeof '10' === typeof 10); // false

// Question 3. Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') === 10); // false

// Question 4. 
// Truthy values
console.log(1); // non-zero number
console.log("hello"); // non-empty string
console.log([]); // non-empty object (array)

// Falsy values
console.log(0); // zero
console.log(""); // empty string
console.log(null); // null value

// Question 5. Logical expressions
console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!(false)); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === '4')); // true

// Question 6. Calculate area of a triangle
let base = prompt("Enter base of the triangle:");
let height = prompt("Enter height of the triangle:");
let area = 0.5 * base * height;
console.log(`The area of the triangle is ${area}`);

// Question 7. Check driving eligibility
let birthYear = prompt("Enter birth year:");
let currentYear = new Date().getFullYear();
let userAge = currentYear - birthYear;
if (userAge >= 18) {
    console.log(`You are ${userAge}. You are old enough to drive.`);
} else {
    let waitYears = 18 - userAge;
    console.log(`You are ${userAge}. You will be allowed to drive after ${waitYears} years.`);
}

// Question 8
let challenge = "30 Days Of JavaScript";

// Question 9
console.log(challenge.toUpperCase()); // Convert to uppercase

// Question 10
console.log(challenge.toLowerCase()); // Convert to lowercase

// Question 11
console.log(challenge.slice(3)); // Cut out the first word

// Question 12
console.log(challenge.slice(3, challenge.length)); // Slice out 'Days Of JavaScript'

// Question 13
console.log(challenge.includes("Script")); // Check if it contains 'Script'

// Question 14
console.log(challenge.indexOf("a")); // Position of first 'a'

// Question 15
console.log(challenge.lastIndexOf("a")); // Position of last 'a'

// Question 16. Find first occurrence of 'because'
let sentence = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence.indexOf("because")); // Position of first 'because'

// Quetion 17. Check if string starts with '30 Days Of JavaScript'
console.log(challenge.startsWith("30 Days Of JavaScript")); // true

// Question 18. Check if string ends with '30 Days Of JavaScript'
console.log(challenge.endsWith("30 Days Of JavaScript")); // true

// Question 19. Generate random number between 0 and 100
let randomNum = Math.floor(Math.random() * 101);
console.log(randomNum);

// Question 20. 
// Compare two numbers using if-else
let a = 10;
let b = 20;
if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is less than b");
}

// Compare two numbers using ternary operator
console.log(a > b ? "a is greater than b" : "a is less than b");

// Question 21. Grading system
let scores = 85;
let grade;
if (scores >= 80 && scores <= 100) {
    grade = "A";
} else if (scores >= 70 && scores <= 89) {
    grade = "B";
} else if (scores >= 60 && scores <= 69) {
    grade = "C";
} else if (scores >= 50 && scores <= 59) {
    grade = "D";
} else {
    grade = "F";
}
console.log(`Your grade is ${grade}`);
