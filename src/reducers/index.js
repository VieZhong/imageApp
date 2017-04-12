import { combineReducers } from 'redux-immutable';

const rootReducer = combineReducers({
    reducer: (state, action) => {
        return 'state';
    }
});

export default rootReducer;