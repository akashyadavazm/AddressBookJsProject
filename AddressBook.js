// import Contact from './Contact.js';
const Contact = require('./Contact.js');

class AddressBook {
  constructor() {
    this.contacts = [];
  }

  addContact(contact) {
    this.contacts.push(contact);
    console.log(`${contact.firstName} ${contact.lastName} added.`);
  }

  displayAllContacts() {
    console.log("All Contacts:");
    this.contacts.forEach(contact => {
      contact.displayContactInfo();
      console.log("------");
    });
  }
}

module.exports = AddressBook;