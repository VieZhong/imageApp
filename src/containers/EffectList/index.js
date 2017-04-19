import React from 'react';
import { connect } from 'react-redux';

import EffectList from '../../components/EffectList';
import actions from '../../actions';

const mapDispatchToProps = (dispatch) => {
    return {
        chooseEffect: (effect) => {
            dispatch(actions.handleEffect(effect));
        }
    }
}

export default connect(undefined, mapDispatchToProps)(EffectList);;