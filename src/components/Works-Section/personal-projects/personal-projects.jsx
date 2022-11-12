import projectsDB from '../../../Database/projectsDB.js';
import Project from './project/project.jsx';
import "./personal-projects.css";

const projects = ({ projectInfo }) => {
  return (
    <div className="container contsp">
      <h2 className="project-txt">Personal Projects</h2>

      <div className='projects-container'>
        {
          projectsDB.map( project => {
            return(
              <Project projectInfo={project} />
            )
          } )
        }
      </div>
    </div>
  );
};

export default projects;
