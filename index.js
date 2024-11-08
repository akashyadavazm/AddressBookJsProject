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

myAddressBook.addContact(
  "Alice", "Williams", 
  "789 Maple St", "Chicago", "IL", 
  "60601", "5557654321", "alice.williams@example.com"
);

// Display all contacts
console.log("All contacts:");
myAddressBook.displayContacts();

// Delete a contact by name
console.log("Deleting contact(s) named Alice...");
myAddressBook.deleteContactByName("Alice");

// Display contacts after deletion
console.log("Contacts after deletion:");
myAddressBook.displayContacts();
