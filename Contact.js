class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.phone = phone;
      this.email = email;
    }
  
    // Method to display contact details
    displayContactInfo() {
      console.log(`Name: ${this.firstName} ${this.lastName}`);
      console.log(`Address: ${this.address}, ${this.city}, ${this.state} ${this.zip}`);
      console.log(`Phone: ${this.phone}`);
      console.log(`Email: ${this.email}`);
    }
  }

  module.exports = Contact;