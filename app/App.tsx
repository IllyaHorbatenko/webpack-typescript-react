import * as React from 'react';

import {
    Router,
    Route
} from 'react-router';
import createHistory  from 'history/createBrowserHistory';
import Base from './Base';
import {autobind} from 'core-decorators';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

@autobind
class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <Router history={createHistory()}>
                <Route path="/" component={Base}/>
            </Router>
        );
    }
}

export default App;