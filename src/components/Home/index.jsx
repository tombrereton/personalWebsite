import React from 'react';
import './style.css';
import Layout from '../Layout';
import app from '../Flamelink';
import ReactMarkdown from 'react-markdown';



class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      homeContent: {}
    };
  }

  componentWillMount() {
    app.content.get('homePage')
      .then(p => this.setState({ homeContent: p }))
      .catch(e => console.log('Blog post error', e))
  }

  render() {

    if (this.state.homeContent !== undefined) {
      return (
        <Layout>
          <div className='homeContainer'>
            <div className="homeImageContainer">
              <img src={this.state.homeContent.splashImageLink} alt="spash image of author" />
            </div>
            <div className='homeText'>
              <div className='section1'>
                <h2>{this.state.homeContent.authorName}</h2>
                <h2>{this.state.homeContent.authorRole1}</h2>
                <h2>{this.state.homeContent.authorRole2}</h2>
              </div>
              <div className='section2'>
                <h3>{this.state.homeContent.topicQuestion1}</h3>
                <ReactMarkdown source={this.state.homeContent.topicAnswer1} />
                <h3>{this.state.homeContent.topicQuestion2}</h3>
                <ReactMarkdown source={this.state.homeContent.topicAnswer2} />
                <h3>{this.state.homeContent.topicQuestion3}</h3>
                <ReactMarkdown source={this.state.homeContent.topicAnswer3} />
              </div>
              <div className='section3'>
                <h3>{this.state.homeContent.topicQuestion4}</h3>
                <ReactMarkdown source={this.state.homeContent.topicAnswer4} />
              </div>
            </div>
          </div>
        </Layout>
      )
    } else {
      console.log('state is empty')
    }
  }
}

export default Home;
