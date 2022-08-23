import "./contact.css";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";

function Contact() {
  return (
    <div id="contact" className="container contact-container">
      <h2>Contact Me</h2>
      <div className="contact-links">
        <a
          href="https://www.linkedin.com/in/alan-aguilar-b24a151a8"
          className="contact youtube"
          target="_blank"
        >
          <AiOutlineLinkedin className="icon" />
          <h4>
            LinkedIn <span>Alan Aguilar</span>
          </h4>
        </a>

        <a
          href="https://wa.me/+543424860769"
          className="contact whatsapp"
          target="_blank"
        >
          <AiOutlineWhatsApp className="icon" />
          <h4>
            WhatsApp <span>+54 342 4 860 769</span>
          </h4>
        </a>

        <a
          href="mailto: alan.dev@outlook.kr"
          className="contact mail"
        >
          <AiOutlineMail className="icon" />
          <h4>
            Email <span>alan.dev@outlook.kr</span>
          </h4>
        </a>
      </div>
    </div>
  );
}

export default Contact;
