import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import App from './components/App'
import ReactGA from 'react-ga';
ReactGA.initialize('UA-114987249-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(
  <AppContainer>
      <App />
  </AppContainer>,
  document.getElementById('app')
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp/>
      </AppContainer>,
      document.getElementById('app')
    );
  });
}
