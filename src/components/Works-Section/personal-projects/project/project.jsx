import React from 'react';
import './project.css';

const project = ({ project }) => {
	return (
		<div className='project'>
			<img
				className='project-img'
				src={require(`../../../../assets/projects-thumbnails/${project.thumbnail}`)}
			/>
			<div className='project-info'>
				<div>
					<h3 className='name'>{project.name}</h3>
					<h4 className='position'>{project.tools}</h4>
				</div>
				<a
					href={project.link}
					rel='noreferrer'
					className='contact-project'
					target='_blank'>
					<span>View Project</span>
				</a>
			</div>
		</div>
	);
};

export default project;
