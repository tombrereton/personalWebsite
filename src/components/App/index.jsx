import React from 'react';
import { RingLoader } from 'react-spinners';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from '../Home';
import About from '../About';
import Sample from '../Sample';
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
          <Route path="/about" component={About} />
          <Route path="/sample" component={Sample} />
        </div>
      </Router>
    );
  }
}

export default App;
