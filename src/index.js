import ReactDOM from 'react-dom';
import $ from 'jquery';
import './App.css';
import App from './App.js';

ReactDOM.render(<App />, document.getElementById('root'));

$('a').attr('draggable', 'false')

$(".link, .btn .sec, .backTop").on("click", function(e) {      
    e.preventDefault();
    $(window).scrollTop($($(this).attr('href')).offset().top);
});