import React from 'react';
import './about.css';
import Buttons from './button/button.jsx';

function About() {
	return (
		<div id='about' className='container about-container'>
			<h2>About Me</h2>

			<p>
				Alan is a programmer, musician and minimalist graphic designer based in
				Argentina.
				<br />
				<br />
				He loves all kind of technology, artifacts and languages. In his free
				time, he enjoys creating different types of apps for desktop and mobile
				devices, playing his favorite instruments, telling bad jokes, and of
				course, playing video games.
				<br />
				<br />
				Always looking for something new to learn, whether it&apos;s for work or
				for simply entertainment, to him everything is useful.
				<br />
				<br />
				He likes all kind of animals and loves to help them in anything.
				He&apos;s not a big fan of cats but... yeah, they are really cute too,
				and always likes to take some time with their neighbours&apos; cats.
			</p>

			<Buttons />
		</div>
	);
}

export default About;
