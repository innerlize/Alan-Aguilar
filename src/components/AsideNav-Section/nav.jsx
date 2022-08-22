import "./nav.css";
import Scrollspy from "react-scrollspy";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";
import { AiOutlineMessage } from "react-icons/ai";

function Navbar() {
  return (
    <Scrollspy
      className="navigation"
      items={ ['home', 'about', 'skills', 'works', 'contact'] }
      currentClassName="current"
    >
      <a href="#home" className="link">
        <AiOutlineHome className="icon" />
      </a>
      <a href="#about" className="link">
        <AiOutlineUser className="icon" />
      </a>
      <a href="#skills" className="link">
        <AiOutlineBulb className="icon" />
      </a>
      <a href="#works" className="link">
        <MdOutlineWorkOutline className="icon" />
      </a>
      <a href="#contact" className="link">
        <AiOutlineMessage className="icon" />
      </a>
    </Scrollspy>
  );
}

export default Navbar;