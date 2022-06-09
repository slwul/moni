import React from 'react';
import ReactDOM from 'react-dom';

import {AppProviders} from 'lib/components/app-provider';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root'),
);
