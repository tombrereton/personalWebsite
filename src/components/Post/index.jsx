import React from 'react';
import './style.css';

const Post = (props) => (
  <div className="postContainer">
    <h1>{props.title}</h1>
    <p>{props.datePublished}</p>
    <hr />
  </div>
)

export default Post
