import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {AppContainer} from 'react-hot-loader';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      document.getElementById('root')
    );
  })
}

registerServiceWorker();
