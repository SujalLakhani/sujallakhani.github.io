import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const initialValues = { name: "", email: "", title: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
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
            document.getElementById("contact__form").reset();
            alert("Message successfully delivered!!");
          },
          (error) => {
            console.log(error.text);
          }
        );
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.name) {
      errors.name = "Name is required!";
    } else if (values.name.length < 2) {
      errors.name = "Enter Valid Name!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter Valid Email!";
    }
    if (!values.title) {
      errors.title = "Title is required!";
    } else if (values.title.length < 5) {
      errors.title = "Enter valid Title!";
    }
    if (!values.message) {
      errors.message = "Message is required!";
    } else if (values.message.length < 5) {
      errors.message = "Enter valid Message!";
    }

    return errors;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>
      <div className="contact__container container grid">
        <form
          className="contact__form grid"
          id="contact__form"
          onSubmit={sendEmail}
          ref={form}
        >
          <div className="contact__inputs">
            <div className="contact__content">
              <label className="contact__label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                className="contact__input"
                value={formValues.name}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <p className="error__message">{formErrors.name}</p>
            <div className="contact__content">
              <label className="contact__label">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                className="contact__input"
                value={formValues.email}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <p className="error__message">{formErrors.email}</p>
            <div className="contact__content">
              <label className="contact__label">Title</label>
              <input
                type="text"
                id="title"
                name="title"
                className="contact__input"
                value={formValues.title}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
            </div>
            <p className="error__message">{formErrors.title}</p>
            <div className="contact__content">
              <label className="contact__label">Message</label>
              <textarea
                id="message"
                name="message"
                cols="0"
                rows="7"
                className="contact__input"
                value={formValues.message}
                onChange={(e) => {
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  });
                }}
              ></textarea>
            </div>
            <p className="error__message">{formErrors.message}</p>
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
