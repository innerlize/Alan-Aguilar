import React from 'react';
import worksDB from '../../databases/worksDB.js';
import Work from './work/work.jsx';
import PersonalProjects from './personal-projects/personal-projects.jsx';
import './works-container.css';

const works = () => {
	return (
		<section id='works'>
			<div className='container works-container'>
				<h2 className='work-txt'>Work Experience</h2>

				{worksDB.map(work => {
					return <Work key={work.name} workInfo={work} />;
				})}
			</div>

			<PersonalProjects />
		</section>
	);
};

export default works;
