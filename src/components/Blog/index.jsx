import React from 'react';
import Layout from '../Layout';
import './style.css';
import app from '../Flamelink';
import Post from '../Post';
import { Link } from 'react-router-dom';

class Blog extends React.Component {

  constructor() {
    super()
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    app.content.get('post')
      .then(p => {
        for (var property in p) {
          let post = p[property];
          if (post.status === 'published') {
            this.setState({ posts: this.state.posts.concat([post]) });
          }
        }
      })
      .catch(e => console.log('Blog post error', e))
  }

  render() {
    let blogPosts = this.state.posts.map((post) => {
      return (
        <Link to={"/post/" + post.id}> <Post title={post.title} datePublished={post.date} /> </Link>
      )
    });
    return (
      <Layout>
        <div className='blogContainer'>
          {blogPosts}
        </div>
      </Layout >
    )
  }
}

export default Blog;
