import * as React from 'react';
import {autobind} from 'core-decorators';

import States from '../components/States';

@autobind
export default class Index extends React.Component<any, any> {
    render() {
        return (
            <section className="container">
                <h1>Webpack React</h1>
                <div className="panel panel-default">
                    <States/>
                </div>
            </section>
        )
    }
}