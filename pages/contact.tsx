import React from "react";
import "./Contact.css";

const Contacts: React.FC = () => {
  return (
    <div>
      {" "}
      <h1 className="want-to-talk">Want to talk ?</h1>
      <div className="contacts-container">
        <div className="contact-section">
          <h1 className="contact-button">Contact Me</h1>
          <table>
            <tr>
              <td>📞</td>
              <td>+91 7972957143</td>
            </tr>
            <tr>
              <td>📩</td>
              <td>arjunvnaik31@gmail.com</td>
            </tr>
            <tr>
              <td>📌</td>
              <td>Nagavara, Bengaluru</td>
            </tr>
          </table>
        </div>
        <div className="contact-section">
          <h1 className="contact-button">Get In Touch</h1>
          <input type="text" placeholder="Name" className="contact-input" />
          <input
            type="email"
            placeholder="Email Id"
            className="contact-input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="contact-input"
          />
          <button className="send-button">Send</button>
        </div>
        <div></div>
      </div>
     
    </div>
  );
};

export default Contacts;
