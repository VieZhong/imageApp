import * as reducerTpye from '../unit/reducerType';

const newImgData = (state = {}, action) => {
    switch (action.type) {
        case reducerTpye.UPDATE_CURRENT_IMG_DATA:
            return action.data;
        case reducerTpye.SAVE_ORIGIN_IMG_DATA:
            return action.data;
        default:
            return state;
    }
}

export default newImgData;