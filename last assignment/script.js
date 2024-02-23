// Define a class representing a software company
class SoftwareCompany {
    constructor(name, founder, yearFounded, products) {
      this.name = name;
      this.founder = founder;
      this.yearFounded = yearFounded;
      this.products = products;
    }
  
    // A method to log some of the company's details
    logDetails() {
      console.log(`Company name: ${this.name}`);
      console.log(`Founder: ${this.founder}`);
      console.log(`Year Founded: ${this.yearFounded}`);
      console.log(`Products: ${this.products.join(", ")}`);
    }
  }
  
  // Create an instance of the SoftwareCompany class
  const company = new SoftwareCompany("Acme Software", "John Doe", 2005, ["Product A", "Product B", "Product C"]);
  
  // Access and log some of the company's properties
  console.log(`Company name: ${company.name}`);
  console.log(`Year Founded: ${company.yearFounded}`);
  console.log(`Founder: ${company.founder}`);
  
  // Log all the properties of the company
  company.logDetails();
  




  
// Define a car object with properties and a method
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  
  // Method that logs a message indicating the car is being driven
  drive: function() {
    console.log(`The ${this.brand} ${this.model} ${this.year} is being driven.`);
  }
};

// Call the drive method on the car object
car.drive();







// Define an array called fruits containing the names of different fruits
const fruits = ["Apple", "Banana", "Orange", "Grapes", "Pineapple"];

// Get the unordered list element by its ID
const fruitsList = document.getElementById("fruitsList");

// Loop through the fruits array and create list items for each fruit
fruits.forEach(fruit => {
  // Create a list item element
  const listItem = document.createElement("li");
  
  // Set the text content of the list item to the current fruit
  listItem.textContent = fruit;
  
  // Append the list item to the unordered list
  fruitsList.appendChild(listItem);
});



// Define the array called numbers containing some numerical values
let numbers = [1, 2, 3, 4, 5];

// Get the result paragraph element by its ID
const resultElement = document.getElementById("result");

// Add an event listener to the Add Element button
document.getElementById("addElement").addEventListener("click", function() {
    // Add a new element to the end of the array
    numbers.push(6);
    
    // Update the result text to show the updated array
    resultElement.textContent = "Updated Array: " + numbers.join(", ");
});

// Add an event listener to the Remove Element button
document.getElementById("removeElement").addEventListener("click", function() {
    // Remove the last element from the array
    numbers.pop();
    
    // Update the result text to show the updated array
    resultElement.textContent = "Updated Array: " + numbers.join(", ");
});

// Add an event listener to the Find Index button
document.getElementById("findIndex").addEventListener("click", function() {
    // Find the index of the number 3 in the array
    const index = numbers.indexOf(3);
    
    // Update the result text to show the index
    resultElement.textContent = "Index of 3: " + index;
});




// Fetch data from the API
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Render the data on the webpage
    const dataDiv = document.getElementById('data');
    
    // Create an unordered list
    const ul = document.createElement('ul');
    
    // Loop through each post and create a list item for each one
    data.forEach(post => {
      const li = document.createElement('li');
      li.textContent = `Post ${post.id}: ${post.title}`;
      ul.appendChild(li);
    });
    
    // Append the unordered list to the data div
    dataDiv.appendChild(ul);
  })
  .catch(error => console.error('Error fetching data:', error));
