import * as React from 'react';
import {autobind} from 'core-decorators';
import {connect} from 'react-redux';

import {loadStates} from '../store/actions/states';

@autobind
@connect((store)=>{
    return {
        states: store.states
    };
})
class States extends React.Component<any, any> {
    componentWillMount() {
        this.props.dispatch(loadStates())
    }

    render() {
        return (
            <ul>
                {this.props.states.map((state) => {
                    return <li key={state}>{state}</li>
                })}
            </ul>
        );
    }
}

export default connect((store) => {
    return {
        states: store.states
    };
})(States);