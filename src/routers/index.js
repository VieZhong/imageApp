import React from 'react';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import Frame from '../layouts';

export default function(props) {
    return (
        <ConnectedRouter history={props.history}>
            <div>
                <Route path="/" component={Frame} />
            </div>
        </ConnectedRouter>
    );
};
