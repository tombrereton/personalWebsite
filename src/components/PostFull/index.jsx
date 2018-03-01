import React from 'react';
import Layout from '../Layout';
import './style.css';

const PostFull = ({ match }) => (
  <Layout>
    <div className="postFullContainer">
      <h1>{match.params.id}</h1>
    </div>
  </Layout>
)

export default PostFull
