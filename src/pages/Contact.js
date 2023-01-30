import React from "react";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <form className="contact__form grid">
          <div className="contact__inputs grid">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input type="text" id="name" className="contact__input" />
            </div>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input type="email" id="email" className="contact__input" />
            </div>
            <div className="contact__content">
              <label className="contact__label">Title</label>
              <input type="text" id="title" className="contact__input" />
            </div>
            <div className="contact__content">
              <label className="contact__label">Message</label>
              <textarea
                name=""
                id="message"
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
