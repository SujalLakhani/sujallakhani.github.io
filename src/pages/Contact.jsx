import React, { useState, useEffect } from "react";

const Contact = () => {
  const initialValues = { name: "", email: "", title: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      // Construct mailto link
      const subject = encodeURIComponent(formValues.title);
      const body = encodeURIComponent(
        `Name: ${formValues.name}\nEmail: ${formValues.email}\n\nMessage:\n${formValues.message}`
      );
      window.location.href = `mailto:sujallakhani98@gmail.com?subject=${subject}&body=${body}`;
      
      setFormValues(initialValues);
      setIsSubmit(false);
    } else {
      setIsSubmit(false);
    }
  }, [formErrors, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    
    if (!values.name.trim()) {
      errors.name = "Name is required!";
    } else if (values.name.trim().length < 2) {
      errors.name = "Enter a valid Name!";
    }
    
    if (!values.email.trim()) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email.trim())) {
      errors.email = "Enter a valid Email!";
    }
    
    if (!values.title.trim()) {
      errors.title = "Title is required!";
    } else if (values.title.trim().length < 5) {
      errors.title = "Title must be at least 5 characters!";
    }
    
    if (!values.message.trim()) {
      errors.message = "Message is required!";
    } else if (values.message.trim().length < 5) {
      errors.message = "Message must be at least 5 characters!";
    }

    return errors;
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <span className="section__subtitle">Get in touch</span>

      <div className="contact__container container grid">
        <div data-reveal className="contact__card glass-card">
          <form
            className="contact__form grid"
            id="contact__form"
            onSubmit={sendEmail}
          >
            <div className="contact__inputs">
              
              {/* Name Input */}
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
              {formErrors.name && <p className="error__message">{formErrors.name}</p>}

              {/* Email Input */}
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
              {formErrors.email && <p className="error__message">{formErrors.email}</p>}

              {/* Subject Input */}
              <div className="contact__content">
                <label className="contact__label">Subject Title</label>
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
              {formErrors.title && <p className="error__message">{formErrors.title}</p>}

              {/* Message Input */}
              <div className="contact__content">
                <label className="contact__label">Message</label>
                <textarea
                  id="message"
                  name="message"
                  cols="0"
                  rows="5"
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
              {formErrors.message && <p className="error__message">{formErrors.message}</p>}

              <div style={{ marginTop: "1rem" }}>
                <button type="submit" className="button button--flex" style={{ width: "100%", justifyContent: "center" }}>
                  Send Message
                  <i className="uil uil-message button__icon"></i>
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
