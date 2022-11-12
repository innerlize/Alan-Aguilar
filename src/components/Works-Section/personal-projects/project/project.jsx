import React from 'react';
import './project.css';

const project = ({ projectInfo }) => {

  return (

    <div className="project">
    	<div className="project-img" style={{ backgroundImage: `url(${projectInfo.img})` }}></div>
    	<div className="project-info">
            <div>
	    	    <h3 className="name">{ projectInfo.name }</h3>
	    	    <h4 className="position">{ projectInfo.tools }</h4>
            </div>
	        <a href={ projectInfo.link } className="contact-project" target="_blank">
	        	<span>View Project</span>
	        </a>
        </div>
    </div>

  )
}

export default project;