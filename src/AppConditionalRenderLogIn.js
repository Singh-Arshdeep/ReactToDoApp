import React from 'react';
import AppConditionalRenderLogInEx from './AppConditionalRenderLogInEx';

class AppConditionalRenderLogIn extends React.Component {

    constructor() {
        super();
        this.state = {
            status:"logOff"
        }
        this.handleClick = this.handleClick.bind(this); 
    }

    handleClick(id) {
        this.setState(prevState=>{
            if(prevState.status==='logOff')
                return{
                    status:"logIn"
                }
            else 
                return{
                    status:"logOff"
                }
        }
        );
    }

    render() {
        return(
            <AppConditionalRenderLogInEx status={this.state.status} 
            click={this.handleClick} />
        );
    }
}

export default AppConditionalRenderLogIn;