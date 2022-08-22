import worksDB from '../../Database/worksDB.js';
import Work from './work/work.jsx'
import "./works-container.css";

const works = ({ worksInfo }) => {
  return (
    <div id="works" className="container works-container">
      <h2 className="work-txt">Work Experience</h2>

      {
        worksDB.map( work => {
          return(
            <Work workInfo={work} />
          )
        } )
      }
    </div>
  );
};

export default works;
