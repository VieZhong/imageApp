import * as reducerTpye from '../unit/reducerType';

const orginImgData = (state = {}, action) => {
    switch (action.type) {
        case reducerTpye.SAVE_ORIGIN_IMG_DATA:
            return action.data;
        default:
            return state;
    }
}

export default orginImgData;