import React from 'react';
import skills from '../../databases/skillsDB.js';
import Skill from './skill/skill.jsx';
import './skills-container.css';

function Skills() {
	return (
		<div id='skills' className='container skills-container'>
			<h2>My Skills</h2>
			<div className='skills-boxes'>
				{skills.map(skill => {
					return <Skill key={skill.name} skill={skill} />;
				})}
			</div>
		</div>
	);
}

export default Skills;
