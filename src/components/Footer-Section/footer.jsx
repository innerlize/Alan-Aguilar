import React from 'react';
import './footer.css';
import { BsMouse } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { TiSocialGithub } from 'react-icons/ti';

function Footer() {
	return (
		<div id='footer' className='container footer-container'>
			<h3>
				That&apos;s all{' '}
				<a href='#home' className='backTop'>
					<h4>
						<BsMouse /> - scroll up -
					</h4>
				</a>
			</h3>
			<div className='social-links'>
				<a href='https://www.instagram.com/tiltedveggie/'>
					<BsInstagram className='social' />
				</a>

				<a href='#'>
					{' '}
					<FaFacebookF className='social' />
				</a>

				<a href='https://github.com/tiltedveggie'>
					<TiSocialGithub className='social' />
				</a>
			</div>
		</div>
	);
}
export default Footer;
