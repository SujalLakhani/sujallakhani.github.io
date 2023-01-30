import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7vlfkk",
        "template_5imwj18",
        form.current,
        "ZBqoIuBwHHZyzfGLL"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message successfully delivered!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <form className="contact__form grid" onSubmit={sendEmail} ref={form}>
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="contact__input"
              />
            </div>
            <div className="contact__content">
              <label className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                cols="0"
                rows="7"
                className="contact__input"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
