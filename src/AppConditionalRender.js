import React from 'react';
import ConditionalRenderExample from './ConditionalRenderExample'

class AppConditionalRender extends React.Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState(
                (prevState) => {
                    return {
                        loading:false
                    }
                }
            );
        }, 3000);
    }

    render() {
        return (
            <div>
                <header>Practice ConditionalRender</header>
                <ConditionalRenderExample loading={this.state.loading} />
                <footer>All rights reserved</footer>
            </div>
        );
    }
}

export default AppConditionalRender;

