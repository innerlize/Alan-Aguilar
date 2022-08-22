import skillsDB from '../../Database/skillsDB.js';
import Skill from './skill/skill.jsx'
import { AiOutlineWhatsApp } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import './skills-container.css';

function Skills({ skillsInfo }) {
  return (
    <div id="skills" className="container skills-container">
      <h2>My Skills</h2>
      <div className="skills-boxes">
        {
          skillsDB.map( skill => {
            return(
              <Skill skillInfo={skill} />
            )
          } )
        }
      </div>
    </div>
  );
}

export default Skills;