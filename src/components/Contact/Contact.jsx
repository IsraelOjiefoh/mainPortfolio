import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./contact.scss"; // Import the SCSS file

const Contact = () => {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xzblkkol");

  if (state.succeeded) {
    return <p className="contact-form">Thanks for contacting me!</p>;
  }

  return (
    <div className="contact-container">
<h1>Contact Me</h1>
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input id="email" type="email" name="email" />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <label htmlFor="text">Message</label>
      <textarea id="message" name="message" />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
    </div>
  );
};

export default Contact;
