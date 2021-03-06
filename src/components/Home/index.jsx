import React from 'react';
import './style.scss';
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

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleImageLoaded() {
    this.setState({ loading: false })
    document.getElementById("splashImageHome").setAttribute('alt', "hire website developer software engineer react c#");
  }

  handleScroll() {
    document.getElementById("downArrowHome").style.display = 'none';
  }

  render() {
    return (
      <Layout>
        <div className='homeContainer'>
          <BounceLoader
            color={'#474973'}
            loading={this.state.loading}
          />
          <div className="downArrow bounce" id="downArrowHome">
            <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
          </div>
          <div className="homeImageContainer">
            <img id='splashImageHome' src={this.state.homeContent.splashImageLink} onLoad={this.handleImageLoaded.bind(this)} alt="" />
          </div>
          <div className='homeText'>
            <div className='section1'>
              <h1>{this.state.homeContent.authorName}</h1>
              <h1>{this.state.homeContent.authorRole1}</h1>
              <h1>{this.state.homeContent.authorRole2}</h1>
            </div>
            <div className='section2'>
              <h2>{this.state.homeContent.topicQuestion1}</h2>
              <ReactMarkdown source={this.state.homeContent.topicAnswer1} />
              <h2>{this.state.homeContent.topicQuestion2}</h2>
              <ReactMarkdown source={this.state.homeContent.topicAnswer2} />
              <h2>{this.state.homeContent.topicQuestion3}</h2>
              <ReactMarkdown source={this.state.homeContent.topicAnswer3} />
            </div>
            <div className='section3'>
              <h2 className='section3Header'>{this.state.homeContent.topicQuestion4}</h2>
              <ReactMarkdown source={this.state.homeContent.topicAnswer4} />
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Home;
