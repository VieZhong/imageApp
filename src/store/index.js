import { createStore, applyMiddleware  } from 'redux';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../reducers';
import history from '../history';

export default createStore(rootReducer, applyMiddleware(routerMiddleware(history), thunk));