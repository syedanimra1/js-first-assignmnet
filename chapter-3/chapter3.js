// Declare a variable called age and assign your age to it
var age = 19;

  
// Display your age in an alert box
alert("My age is: " + age);


// Check if the 'visitCount' variable exists in localStorage
if (localStorage.getItem('visitCount') === null) {
    // If it doesn't exist, initialize it to 1
    localStorage.setItem('visitCount', 1);
  } else {
    // If it exists, increment its value
    var count = parseInt(localStorage.getItem('visitCount'));
    count++;
    localStorage.setItem('visitCount', count);
  }
  
  // Retrieve the visit count from localStorage
  var visitCount = localStorage.getItem('visitCount');
  
  // Display the visit count on the webpage
  document.write("<h2>You have visited this site " + visitCount + " times.</h2>");


    // Declare a variable called birthYear and assign your birth year to it
    var birthYear = 2004; 
    var variable = Number;
  
    // Display a message in the browser
    document.write("<h2>Your birth year is: " + birthYear + "</h2>");
    document.write("<h2>data type of my declared variable is : " + variable + "</h2>");

    // Store visitor's information in variables
  var visitorName = "John Doe";
  var productTitle = "T-shirt";
  var quantity = 5; // Example: The visitor wants to order 5 products
  
  // Display a message in the browser
  document.write("<h2>" + visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store.</h2>");

 