import { useEffect, useState } from "react";
import { send } from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  // Questions, Work Opportunities, Connecting, Other
  const [subject, setSubject] = useState("Questions");
  // LOADING, ERROR, SUCCESS
  const [status, setStatus] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubject = (selectedButton) => {
    setSubject(selectedButton);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submitBtn = document.querySelector(".contact-submit-btn");
    submitBtn.innerHTML = "Sending...";
    submitBtn.disabled = true;
    setTimeout(() => {
      send(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          from_name: `${firstName} ${surname}`,
          to_name: "Justin",
          subject,
          message,
          reply_to: email,
        },
        import.meta.env.VITE_PUBLIC_KEY
      )
        .then((response) => {
          console.log("SUCCESS!", response.status, response.text);
        })
        .catch((err) => {
          console.log("FAILED", err);
        });
      submitBtn.innerHTML = "Sent!";
    }, 2000);
  };

  useEffect(() => {
    const page = document.querySelector(".App");
    setTimeout(() => {
      page.classList.remove("animate_content");
    }, 2000);
  });

  return (
    <div className="contact-container">
      <h1>
        I would love to hear from you!<br></br>Get in touch 👋
      </h1>
      <div className="contact-form">
        <form
          className="contact-form-container"
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <div className="contact-info">
            <div className="contact-name">
              <div className="contact-form-input">
                <label htmlFor="fname">First Name</label>
                <input
                  id="fname"
                  type="text"
                  placeholder="Enter your first name"
                  name="name"
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div className="contact-form-input">
                <label htmlFor="surname">Surname</label>
                <input
                  id="surname"
                  type="text"
                  placeholder="Enter your surname"
                  name="surname"
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="contact-form-input">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="contact-form-subject">
              <p>I&apos;m contacting you for...</p>
              <div className="subject-btns">
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Questions" ? "active-btn" : ""}`}
                >
                  Questions
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${
                    subject === "Work Opportunities" ? "active-btn" : ""
                  }`}
                >
                  Work Opportunities
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Connecting" ? "active-btn" : ""}`}
                >
                  Connecting
                </button>
                <button
                  type="button"
                  onClick={(e) => handleSubject(e.target.innerHTML)}
                  className={`${subject === "Other" ? "active-btn" : ""}`}
                >
                  Other
                </button>
              </div>
            </div>
          </div>
          <div className="contact-msg">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              cols="50"
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button className="contact-submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
