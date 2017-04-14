import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import history from './history'
import store from './store';

import AppRouter from './routers';

let root = document.createElement('root');

render(
  <Provider store={store}>
    <AppRouter history={history}/>
  </Provider>
    , root
);

document.getElementsByTagName('body')[0].append(root);