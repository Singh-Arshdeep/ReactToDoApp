import React from 'react';

class ConditionalRenderExample extends React.Component {

    render() {
        console.log( this.props.loading);
        return(

        this.props.loading ? <h2>Loading</h2>:<h2>Loaded</h2>
        
        );
    }
}

export default ConditionalRenderExample;