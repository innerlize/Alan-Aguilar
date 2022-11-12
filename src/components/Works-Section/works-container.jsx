import worksDB from '../../Database/worksDB.js';
import Work from './work/work.jsx';
import PersonalProjects from './personal-projects/personal-projects.jsx';
import "./works-container.css";

const works = ({ worksInfo }) => {
  return (
    <section id="works">
      <div className="container works-container">
        <h2 className="work-txt">Work Experience</h2>

        {
          worksDB.map( work => {
            return(
              <Work workInfo={work} />
            )
          } )
        }
      </div>

      <PersonalProjects />
    </section>
  );
};

export default works;
