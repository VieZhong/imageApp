import * as reducerTpye from '../unit/reducerType';
import handleEffectWorkerUrl from '../unit/handleEffectWorker.js';

function saveOriginImgData(data) {
    return {
        type: reducerTpye.SAVE_ORIGIN_IMG_DATA,
        data
    }
}

// let saveOriginImgData = createAction(reducerTpye.SAVE_ORIGIN_IMG_DATA, data => data);

function handleEffect(effect) {
    return (dispatch, getState) => {
        let orginImgData = getState().get('orginImgData');
        let wk = new Worker(handleEffectWorkerUrl);
        wk.postMessage({imgData: orginImgData, effect});
        wk.onmessage = function(e){
            dispatch(updateImgData(e.data));
        }
    }
}

function updateImgData(data) {
    return {
        type: reducerTpye.UPDATE_CURRENT_IMG_DATA,
        data
    };
}

export default {
    saveOriginImgData,
    handleEffect,
    updateImgData
}