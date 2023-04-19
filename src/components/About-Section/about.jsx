import React from 'react';
import './about.css';
import Buttons from './button/button.jsx';

function About() {
	return (
		<div id='about' className='container about-container'>
			<h2>About Me</h2>

			<p>
				I&apos;m Alan Aguilar, a Frontend Developer, Musician and Minimalist
				Graphic Designer based in Argentina.
				<br />
				<br />
				I started venturing into the world of programming when I was 18 years
				old. I was always interested in absolutely all kinds of technology, and
				programming was something I didn&apos;t dare to fully explore... Until I
				gave it a chance, and to this day it has been one of my best decisions
				throughout of my life.
				<br />
				<br />I became so passionate about the profession that little by little
				I began to create several personal projects. And who would say... What
				used to be a hobby/entertainment soon became my profession and my
				current job.
			</p>

			<Buttons />
		</div>
	);
}

export default About;
