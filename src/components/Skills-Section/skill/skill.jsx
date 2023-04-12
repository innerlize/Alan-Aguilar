import React from 'react';
import './skill.css';

const Skill = ({ skill }) => {
	return (
		<div className='skill'>
			<img
				className='logo'
				src={require(`../../../assets/skills-icons/${skill.ico}`)}
			/>
			<h4>{skill.name}</h4>
		</div>
	);
};

export default Skill;
