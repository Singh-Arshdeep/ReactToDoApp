import React from 'react';

class AppConditionalRenderLogInEx extends React.Component {

    render() {
        return(
        <div>
            <h2>Test {this.props.status}</h2>
            <button onClick={()=>this.props.click()}>{this.props.status}</button>
        </div>
        );
    }
}

export default AppConditionalRenderLogInEx;