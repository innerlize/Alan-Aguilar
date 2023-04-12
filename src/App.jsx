import React from 'react';
import Header from './components/Header-Section/header.jsx';
import Navbar from './components/AsideNav-Section/nav.jsx';
import About from './components/About-Section/about.jsx';
import Skills from './components/Skills-Section/skills-container.jsx';
import Works from './components/Works-Section/works-container.jsx';
import Contact from './components/Contact-Section/contact.jsx';
import Footer from './components/Footer-Section/footer.jsx';
import './App.css';

function App() {
	return (
		<>
			<div className='bg-circle1'></div>
			<div className='bg-circle2'></div>

			<Header />
			<Navbar />
			<About />
			<Skills />
			<Works />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
