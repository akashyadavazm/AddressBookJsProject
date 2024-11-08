class Contact {
    constructor(firstName, lastName, address, city, state, zip, phone, email) {
        
        // Validate First and Last Name
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(firstName)) {
            throw new Error("First Name must start with a capital letter and have at least 3 characters.");
        }
        if (!/^[A-Z][a-zA-Z]{2,}$/.test(lastName)) {
            throw new Error("Last Name must start with a capital letter and have at least 3 characters.");
        }

        // Validate Address, City, and State
        if (address.length < 4) {
            throw new Error("Address must have at least 4 characters.");
        }
        if (city.length < 4) {
            throw new Error("City must have at least 4 characters.");
        }
        if (state.length < 4) {
            throw new Error("State must have at least 4 characters.");
        }
  
        // Validate Zip (assuming a US zip code format)
        if (!/^\d{5}(-\d{4})?$/.test(zip)) {
            throw new Error("Zip code must be in a valid format (e.g., 12345 or 12345-6789).");
        }
  
        // Validate Phone (assuming US phone number format)
        if (!/^\d{10}$/.test(phone)) {
            throw new Error("Phone number must be a valid 10-digit number.");
        }
  
        // Validate Email (simple email validation)
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            throw new Error("Email must be in a valid format.");
        }
  
        // If all validations pass, set the properties
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