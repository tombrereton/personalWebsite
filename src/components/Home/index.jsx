import React from 'react';
import './style.css';
import Layout from '../Layout';
import app from '../Flamelink';
import ReactMarkdown from 'react-markdown';
import { BounceLoader } from 'react-spinners';



class Home extends React.Component {

  constructor() {
    super()
    this.state = {
      homeContent: {},
      loading: true
    };
  }

  componentWillMount() {
    app.content.get('homePage')
      .then(p => this.setState({ homeContent: p }))
      .catch(e => console.log('Blog post error', e))
  }

  handleImageLoaded() {
    this.setState({ loading: false })
  }

  render() {
    return (
      <Layout>
        <div className='homeContainer'>
          <BounceLoader
            color={'#474973'}
            loading={this.state.loading}
          />
          <div className="homeImageContainer">
            <img src={this.state.homeContent.splashImageLink} onLoad={this.handleImageLoaded.bind(this)} />
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
  }
}

export default Home;
