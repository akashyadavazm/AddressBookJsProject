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
  "789 Maple St", "Chicago", "Ilionis", 
  "60601", "5557654321", "alice.williams@example.com"
);

myAddressBook.addContact(
  "Charlie", "Brown", 
  "789 Maple St", "Los Angeles", "California", 
  "10001", "5557654321", "charlie.brown@example.com"
);

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

// Display all contacts
console.log("All contacts:");
myAddressBook.displayContacts();

// Delete a contact by name
console.log("Deleting contact(s) named Alice...");
myAddressBook.deleteContactByName("Alice");

// Display contacts after deletion
console.log("Contacts after deletion:");
myAddressBook.displayContacts();

// Find contacts by city
console.log("\nSearching for contacts in Los Angeles...");
myAddressBook.findContactsByCity("Los Angeles");

// Find contacts by state
console.log("\nSearching for contacts in California...");
myAddressBook.findContactsByState("California");
