const AddressBook = require('./AddressBook.js');
const Contact = require('./Contact.js');

const myAddressBook = new AddressBook();

// Create and add contacts
const contact1 = new Contact("Alice", "Johnson", "123 Main St", "New York", "NY", "10001", "555-1234", "alice@example.com");
myAddressBook.addContact(contact1);

// Display all contacts
myAddressBook.displayAllContacts();