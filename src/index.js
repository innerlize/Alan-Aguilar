import React from 'react';
import ReactDOM from 'react-dom/client';
import $ from 'jquery';
import './App.css';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

$('a').attr('draggable', 'false');

$('.link, .sec, .backTop').on('click', function (e) {
	e.preventDefault();
	$(window).scrollTop($($(this).attr('href')).offset().top);
});
