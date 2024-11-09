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

  // Method to find a contact by first name or last name
  findContactByName(name) {
    // Filter contacts by first name or last name
    const foundContacts = this.contacts.filter(contact =>
      contact.firstName.toLowerCase() === name.toLowerCase() || 
      contact.lastName.toLowerCase() === name.toLowerCase()
    );

    if (foundContacts.length > 0) {
      return foundContacts; // Return the found contacts
    } else {
      console.log("No contacts found with that name.");
      return null;
    }
  }

  // Method to edit an existing contact's details
  editContact(name, newDetails) {
    const foundContacts = this.findContactByName(name); // Find the contact by name

    if (foundContacts && foundContacts.length > 0) {
      const contactToEdit = foundContacts[0]; // Assume the first match for now
      // Update the contact's details with the new values
      Object.assign(contactToEdit, newDetails);
      console.log("Contact updated successfully!");
    } else {
      console.log("Contact not found.");
    }
  }

  // Method to get the number of contacts in the AddressBook
  getContactCount() {
      return this.contacts.length;
    }

  // Method to delete a contact by name
  deleteContactByName(name) {
    const initialLength = this.contacts.length;
    this.contacts = this.contacts.filter(contact =>
      contact.firstName.toLowerCase() !== name.toLowerCase() &&
      contact.lastName.toLowerCase() !== name.toLowerCase()
    );

    if (this.contacts.length < initialLength) {
      console.log(`Contact(s) with the name "${name}" deleted successfully.`);
    } else {
      console.log(`No contact found with the name "${name}" to delete.`);
    }
  }

   // Method to find contacts by city
   findContactsByCity(city) {
    const contactsInCity = this.contacts.filter(contact => 
      contact.city.toLowerCase() === city.toLowerCase()
    );

    if (contactsInCity.length > 0) {
      console.log(`Contacts in ${city}:`);
      contactsInCity.forEach(contact => contact.displayContactInfo());
    } else {
      console.log(`No contacts found in ${city}.`);
    }
  }

  // Method to find contacts by state
  findContactsByState(state) {
    const contactsInState = this.contacts.filter(contact => 
      contact.state.toLowerCase() === state.toLowerCase()
    );

    if (contactsInState.length > 0) {
      console.log(`Contacts in ${state}:`);
      contactsInState.forEach(contact => contact.displayContactInfo());
    } else {
      console.log(`No contacts found in ${state}.`);
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
