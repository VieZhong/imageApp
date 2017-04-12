import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
    constructor() {
        super();
        this.state = {};
    }

    render() {
        return <div>我是首页</div>;
    }

}

const mapStateToProps = (state) => ({

});


export default connect(mapStateToProps)(App);