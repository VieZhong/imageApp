import React from 'react';
import { connect } from 'react-redux';

import ImgContainer from '../../components/ImgContainer';
import actions from '../../actions';

const mapStateToProps = (state) => {
    return {
        imgData: state.get('newImgData'),
        orginData: state.get('orginImgData')
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        save: (imgData) => {
            dispatch(actions.saveOriginImgData(imgData));
        },
        cancel: (imgData) => {
            dispatch(actions.updateImgData(imgData));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImgContainer);;