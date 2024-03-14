// createCustomers.js

const axios = require('axios');

// Define the endpoint URL
const endpoint = 'http://localhost:3000/customers'; // Replace with your actual endpoint URL

// Define the customer data to be sent in the request
const customerData = {
  name: 'John Doe',
  email: 'john@example.com',
  address: '123 Main St',
};

// Function to make a POST request to create a customer
async function createCustomer() {
  try {
    const response = await axios.post(endpoint, customerData);
    console.log('Customer created:', response.data);
  } catch (error) {
    console.error('Error creating customer:', error.message);
  }
}

// Function to hit the create customer endpoint multiple times
async function createCustomers(numTimes) {
  for (let i = 0; i < numTimes; i++) {
    console.log(`Creating customer ${i + 1}/${numTimes}...`);
    await createCustomer();
  }
}

// Specify the number of times to hit the endpoint
const numCustomers = 100;

// Call the function to create customers
createCustomers(numCustomers);
