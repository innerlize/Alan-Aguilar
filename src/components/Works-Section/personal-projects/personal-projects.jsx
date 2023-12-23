import React from 'react';
import projectsDB from '../../../databases/projectsDB.js';
import Project from './project/project.jsx';
import './personal-projects.css';

const projects = () => {
	return (
		<div className='container contsp'>
			<h2 className='project-txt'>Personal Projects</h2>

			<div className='projects-container'>
				{projectsDB.map(project => {
					return <Project key={project.name} project={project} />;
				})}
			</div>
		</div>
	);
};

export default projects;
