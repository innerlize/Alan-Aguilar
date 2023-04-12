import React from 'react';
import './work.css';

const Work = ({ workInfo }) => {
	return (
		<div className='work'>
			<img
				className='work-img'
				src={require(`../../../assets/works-thumbnails/${workInfo.thumbnail}`)}
			/>
			<div className='work-info'>
				<h3 className='name'>{workInfo.name}</h3>
				<h4 className='position'>{workInfo.tools}</h4>
				<p className='about'>{workInfo.description}</p>
				<a
					href={workInfo.link}
					rel='noreferrer'
					className='contact-work'
					target='_blank'>
					<span>View Project</span>
				</a>
			</div>
		</div>
	);
};

export default Work;
