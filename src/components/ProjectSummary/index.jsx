import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const ProjectSummary = (props) => (
  <div className="postContainer">
    <Link to={"/project/" + props.id} className="footerLink"><h1>{props.title}</h1></Link>
    <a href={props.projectLink}>Link</a>
    <p>{props.summary}</p>
    <img src={props.image0} />
    <hr />
  </div>
)

export default ProjectSummary
