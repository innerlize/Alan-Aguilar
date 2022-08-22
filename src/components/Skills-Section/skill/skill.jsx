import React from 'react';
import './skill.css';

const Skill = ({ skillInfo }) => {

  return (

    <div className="skill">
      <div className="logo" style={{ backgroundImage: `url(${skillInfo.img})` }}></div>
      <h4>{ skillInfo.name }</h4>
    </div>

  )
}

export default Skill;