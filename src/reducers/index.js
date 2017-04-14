import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    reducer: (state, action) => {
        return 'state';
    },
    router: routerReducer
});

export default rootReducer;