import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss"; // Import the SCSS file

const Contact = () => {


  return (
    <div className="contact-container">
<h1>Contact Me</h1>
    <form className="contact-form" >
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
        <label htmlFor="text">Message</label>
      <textarea id="message" name="message" />
      <button type="submit">
        Submit
      </button>
    </form>
    </div>
  );
};

export default Contact;
