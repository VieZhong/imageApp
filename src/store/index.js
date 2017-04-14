import { createStore, applyMiddleware  } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import history from '../history';

export default createStore(rootReducer, applyMiddleware(routerMiddleware(history)));