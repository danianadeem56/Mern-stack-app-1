// Simple
import React from "react";
import "./Contact.css";

function Contact() {

  const handleSubmit = (e) => {
    e.preventDefault(); // stop page reload

    // get input values
    const username = e.target.username.value;
    const email = e.target.email.value;
    const contact = e.target.contact.value;

    console.log(username);
    console.log(email);
    console.log(contact);

    // validation
    if (!username || !email || !contact) {
      alert("Credentials required");
    } else {
      alert(`Form Submitted!\nName: ${username}\nPassword: ${email}\ncontact: ${contact}`);
    }
  };

  return (
    <div className="contact">
      <h1>Contact Information</h1>
      <br />
      <p>Feel free to contact us for any inquiries or assistance. We're here to help with questions,
        feedback, or</p>
      <p>support. Reach out, and we'll get back to you as soon as possible!</p>
      <form className="form" onSubmit={handleSubmit}>
        <input className="name" type="text" name="username" placeholder="Enter Name" />
        <br />
        <input className="email" type="email" name="email" placeholder="Email" />
        <br />
        <input className="number" type="number" name="contact" placeholder="Contact" />
        <br />
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;





