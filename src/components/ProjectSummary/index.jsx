import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const ProjectSummary = (props) => (
  <div className="projectSummary" id={'project' + props.key}>
    <div className="firstRow">
      <div className="summaryImage">
        <img src={props.image0} />
      </div>
      <div className="summaryTitleLink">
        <Link to={"/project/" + props.id}><h3>{props.title}</h3></Link>
        <a href={props.projectLink}>Link</a>
      </div>
    </div>
    <div className="secondRow">
      <p>{props.summary}</p>
    </div>
    <div className="projectsSeparator">
    </div>
  </div>
)

export default ProjectSummary
