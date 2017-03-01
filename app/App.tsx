import * as React from 'react';
import {Provider} from 'react-redux';

import {
    Router,
    Route
} from 'react-router';
import createHistory  from 'history/createBrowserHistory';
import {autobind} from 'core-decorators';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import store from './store';

import Layout from './layouts/Default';
import Index from './pages/Index';

@autobind
class App extends React.Component<undefined, undefined> {
    render() {
        return (
            <Provider store={store}>
                <Router history={createHistory()}>
                    <Layout>
                        <Route path="/" component={Index}/>
                    </Layout>
                </Router>
            </Provider>
        );
    }
}

export default App;