import React from 'react';
import Layout from '../Layout';
import './style.css';
import app from '../Flamelink';
import ProjectSummary from '../ProjectSummary';

class Blog extends React.Component {

  constructor() {
    super()
    this.state = {
      projects: []
    };
  }

  componentWillMount() {
    app.content.get('projects')
      .then(p => {
        for (var property in p) {
          let project = p[property];
          this.setState({ projects: this.state.projects.concat([project]) });
        }
      })
      .catch(e => console.log('Projects get error:', e))
  }

  render() {
    let projects = this.state.projects.map((project) => {
      return (
        <div>
          <ProjectSummary
            title={project.title}
            projectLink={project.projectLink}
            summary={project.summary}
            image0={project.image0} 
            id={project.id} />
        </div>
      )
    });
    return (
      <Layout>
        <div className='blogContainer'>
          {projects}
        </div>
      </Layout >
    )
  }
}

export default Blog;
