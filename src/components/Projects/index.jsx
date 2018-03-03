import React from 'react';
import Layout from '../Layout';
import './style.scss';
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
    let projects = this.state.projects.map((project, index) => {
      return (
        <ProjectSummary
          key={index}
          title={project.title}
          projectLink={project.projectLink}
          summary={project.summary}
          image0={project.image0}
          id={project.id} />
      )
    });
    return (
      <Layout>
        <div className='projectsContainer'>
          {projects}
        </div>
      </Layout >
    )
  }
}

export default Blog;
