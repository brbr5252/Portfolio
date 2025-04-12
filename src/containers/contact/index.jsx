import React, { useRef } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import { Animate } from "react-simple-animate";
import emailjs from '@emailjs/browser';
import "./styles.scss";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8o769i9',     // replace with your EmailJS service ID
      'template_up4nw3y',    // replace with your EmailJS template ID
      form.current,
      'jG7XCvmJokOPAE34v'      // replace with your EmailJS public key
    )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
        },
        (error) => {
          alert("Something went wrong. Please try again.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <PageHeaderContent
        headerText="Contact Me"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="contact__content">
        <Animate play duration={1} delay={0}
          start={{ transform: "translateX(-200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3>
        </Animate>

        <Animate play duration={1} delay={0}
          start={{ transform: "translateX(200px)" }}
          end={{ transform: "translateX(0px)" }}
        >
          <form ref={form} onSubmit={sendEmail} className="contact__content__form">
            <div className="contact__content__form__controlswrapper">
              <div>
                <input required name="title" className="inputTitle" type="text"/>
                <label htmlFor="title" className="titleLabel"> Subject </label>
              </div>
              <div>
                <input required name="user_name" className="inputName" type="text" />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input required name="user_email" className="inputEmail" type="email" />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea required name="message" className="inputDescription" rows="5" />
                <label htmlFor="description" className="descriptionLabel">Message</label>
              </div>
            </div>
            <button type="submit">Send</button>
          </form>
        </Animate>
      </div>
    </section>
  );
};

export default Contact;
