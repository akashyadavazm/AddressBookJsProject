// index.js
const AddressBook = require('./AddressBook'); // Import AddressBook class

const myAddressBook = new AddressBook(); // Create a new AddressBook instance

// Add some contacts
myAddressBook.addContact(
  "Alice", "Johnson", 
  "123 Main St", "New York", "NewYork", 
  "10001", "5551234567", "alice.johnson@example.com"
);

myAddressBook.addContact(
  "Bob", "Smith", 
  "456 Oak St", "Los Angeles", "California", 
  "90001", "5559876543", "bob.smith@example.com"
);

// Display all contacts
myAddressBook.displayContacts();

// Find a contact by name
console.log("Searching for Alice...");
const foundContacts = myAddressBook.findContactByName("Alice");
if (foundContacts) {
  console.log("Found contacts:");
  foundContacts.forEach(contact => contact.displayContactInfo());
}

// Edit a contact's information
console.log("Editing Bob's contact...");
myAddressBook.editContact("Bob", {
  address: "789 Pine St", // Change address
  phone: "5551239876"     // Change phone number
});

// Display updated contacts
myAddressBook.displayContacts();
