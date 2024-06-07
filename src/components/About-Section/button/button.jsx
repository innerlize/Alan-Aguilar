import React from 'react';
import './button.css';

function Buttons() {
	return (
		<div className='container button-container'>
			<a
				href='https://1drv.ms/f/c/1b77b9d4e409b29b/EgAIca6nu8ZHtDS9C0TU7EMBEZ4YDSQQHBwRR6mVIXKXjQ?e=X0iYkB'
				rel='noreferrer'
				className='btn pri'
				target='_blank'>
				Download CV
			</a>
			<a href='#contact' className='btn sec'>
				Get in Touch
			</a>
		</div>
	);
}

export default Buttons;
