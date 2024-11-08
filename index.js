// index.js
const AddressBook = require('./AddressBook'); // Import AddressBook class

const myAddressBook = new AddressBook();

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
