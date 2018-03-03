import React from 'react';
import { RingLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../Home';
import Projects from '../Projects';
import Blog from '../Blog';
import Contact from '../Contact';
import PostFull from '../PostFull';
import Project from '../Project';
import './styles.css';

class App extends React.Component {

  constructor() {
    super()
    this.setLoadingToFalse = this.setLoadingToFalse.bind(this);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  setLoadingToFalse() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <Router>
        <div className="outerContainer">
          < RingLoader
            color={'#123abc'}
            loading={this.state.loading}
          />
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/blog" component={Blog} />
          <Route path="/contact" component={Contact} />
          <Route path="/post/:id" component={PostFull} />
          <Route path="/project/:id" component={Project} />
        </div>
      </Router>
    );
  }
}

export default App;
