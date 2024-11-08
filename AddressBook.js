// addressBook.js
const Contact = require('./Contact'); // Import the Contact class

class AddressBook {
  constructor() {
    this.contacts = []; // This will store all contacts
  }

  // Method to add a new contact
  addContact(firstName, lastName, address, city, state, zip, phone, email) {
    try {
      const newContact = new Contact(firstName, lastName, address, city, state, zip, phone, email);
      this.contacts.push(newContact);
      console.log("Contact added successfully!");
    } catch (error) {
      console.error("Error adding contact:", error.message);
    }
  }

  // Method to display all contacts
  displayContacts() {
    if (this.contacts.length === 0) {
      console.log("No contacts available.");
    } else {
      this.contacts.forEach(contact => {
        contact.displayContactInfo();
        console.log('-------------------');
      });
    }
  }
}

module.exports = AddressBook;
