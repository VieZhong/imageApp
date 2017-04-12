import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers'
import store from './store';

var root = document.createElement('root');

render(
  <Provider store={store}>
    <App />
  </Provider>
    , root
);

document.getElementsByTagName('body')[0].append(root);