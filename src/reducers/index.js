import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

import orginImgData from './orginImgData';
import newImgData from './newImgData';

const rootReducer = combineReducers({
    orginImgData,
    newImgData,
    router: routerReducer
});

export default rootReducer;