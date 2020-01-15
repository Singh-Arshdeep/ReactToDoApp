import React from 'react';

class Form extends React.Component {
    
    constructor() {
        super();
        this.state = {
            value:""
        }
    }


    handleChange = (event) => {
        this.setState(
            {
                value:event.target.value
            }
        );
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} required/>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.value}
            </div>
        );
    }
}

export default Form;