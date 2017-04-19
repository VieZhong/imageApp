import React from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import Layout from '../layouts';

export default function(props) {
    return (
        <ConnectedRouter history={props.history}>
            <div>
                <Route path="/" component={Layout} />
            </div>
        </ConnectedRouter>
    );
};
