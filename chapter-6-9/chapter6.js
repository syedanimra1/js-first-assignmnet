

var vale = 10; 
var valuea = 11;
var valueb = 12; 
 

  
// Display result in browser
document.write("<h1>Result:</h1>");
document.write("<p>the value of a is: " + vale+ "</p>");
var myString = "--------------------";
 
// Display the string on the webpage
document.write("<h1>" + myString + "</h1>");
  
document.write("<p>The value of a ++ is:" + valuea+ "</p>");
document.write("<p>now the value of a is: " + valuea + "</p>");

var myString = "--------------------";
 
// Display the string on the webpage
document.write("<h1>" + myString + "</h1>");
  


document.write("<p>the value of a++ is: "+ valuea + "</p>");
document.write("<p>now the value of a is:" + valueb + "</p>");

var myString = "--------------------";
 
// Display the string on the webpage
document.write("<h1>" + myString + "</h1>");
  
document.write("<p>the value of --a is: "+ valuea + "</p>");
document.write("<p>now the value of a is:" + valuea + "</p>");

var myString = "--------------------";
 
// Display the string on the webpage
document.write("<h1>" + myString + "</h1>");

document.write("<p>the value of a-- is:" + valuea + "</p>");
document.write("<p>now the value of a is:" + vale + "</p>");



var a = 2; 
var b = 1;
var result = (--a -b) +  (++b +b--);

 
document.write("<p> a is:" + a + "</p>");
document.write("<p> b is:" + b + "</p>");

document.write("<p> result is:" + result + "</p>");



// Prompt the user to enter their name
const name = prompt("Please enter your name:");

// Greet the user
alert(`Hello, ${name}! Welcome.`);


// Prompt the user to enter a number
let number = prompt("Enter a number:");

// If the user doesn't enter a number, default to 5
if (!number) {
    number = 5;
}

// Convert the input to a number
number = parseInt(number);

// Display the multiplication table
document.write(`<h2>Multiplication Table of ${number}:</h2>`);
for (let i = 1; i <= 10; i++) {
    document.write(`${number} × ${i} = ${number * i}<br>`);
}

// Take input for subject names
const subject1 = prompt("Enter the name of first subject:");
const subject2 = prompt("Enter the name of second subject:");
const subject3 = prompt("Enter the name of third subject:");

// Total marks for each subject
const totalMarks = 100;

// Take input for obtained marks for each subject
let obtainedMarks1 = parseInt(prompt(`Enter obtained marks for ${subject1}:`));
let obtainedMarks2 = parseInt(prompt(`Enter obtained marks for ${subject2}:`));
let obtainedMarks3 = parseInt(prompt(`Enter obtained marks for ${subject3}:`));

// Calculate total marks and percentage
const totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
const percentage = (totalObtainedMarks / (3 * totalMarks)) * 100;

// Display result in a table
document.write("<h2>Result</h2>");
document.write("<table>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.write(`<tr><td>${subject1}</td><td>${totalMarks}</td><td>${obtainedMarks1}</td></tr>`);
document.write(`<tr><td>${subject2}</td><td>${totalMarks}</td><td>${obtainedMarks2}</td></tr>`);
document.write(`<tr><td>${subject3}</td><td>${totalMarks}</td><td>${obtainedMarks3}</td></tr>`);
document.write("<tr><th>Total</th><th colspan='2'>Percentage</th></tr>");
document.write(`<tr><td>${totalObtainedMarks}</td><td colspan='2'>${percentage.toFixed(2)}%</td></tr>`);
document.write("</table>");