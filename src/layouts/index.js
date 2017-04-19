import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';

import ImgContainer from '../containers/ImgContainer';
import EffectList from '../containers/EffectList';

import FuncList from '../components/FuncList';

import styles from './styles';

class Layout extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <div className={styles['container']}>
                    <div className={styles['function-nav']}>
                        <FuncList func={this.props.location.pathname.substring(1)} />
                    </div>
                    <div className={styles['image-container']}>
                        <ImgContainer />
                    </div>
                </div>
                <div className={styles['feature-container']}>
                    <Route path={`${this.props.match.url}effect`} component={EffectList} />
                    <Route exact path={this.props.match.url} render={() => (
                      <div>请选择一个功能</div>
                    )}/>
                </div>
            </div>
        );
    }

}

const mapStateToProps = (state) => ({

});


export default connect(mapStateToProps)(Layout);