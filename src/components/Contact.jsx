import React, { useRef } from "react";
import emailjs from "@emailjs/browser"
import "../styles/Contact.css"

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_85zgyzu",
        "template_ygzo46i",
        form.current,
        "6TYIbH0CSBorNKzgM"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contactme-container">
      <div className="contactme">
        <form ref={form} onSubmit={sendEmail}>
          <div>
            <input type="text" placeholder="Your Name..." name="from_name" />
          </div>
          <div>
            <input type="text" placeholder="Your Email..." name="email" />
          </div>
          <div>
            <textarea
              cols="30"
              rows="8"
              placeholder="Message..."
              name="message"
            ></textarea>
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Contact;