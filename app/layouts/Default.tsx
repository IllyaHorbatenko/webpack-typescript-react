import * as React from 'react';

export default class Layout extends React.Component<any, any> {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}