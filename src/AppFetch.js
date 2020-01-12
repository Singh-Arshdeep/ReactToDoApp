import React from 'react';

class AppFetch extends React.Component {

    constructor() {
        super();
        this.state={
            data:{},
            fname:'',
            lname:''
        }
        this.handleChange =  this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/1/')
        .then(response => response.json())
        .then(dataStarWars => 
            this.setState(
                {
                    data:dataStarWars
                }
            )  
        );
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]:event.target.value
            }
        );
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + event.target.value);
        event.preventDefault();
    }

    render() {
        return(
        <div>

            <h2>Hello world  {this.state.data.name}</h2>
            <form onSubmit={this.handleSubmit}>
             <input type="text" name='fname' value={this.state.fname} onChange={this.handleChange} />
             <input type="text" name='lname' value={this.state.lname} onChange={this.handleChange} />
             <input type="submit" value="Submit" />
             </form>
            {this.state.fname} {this.state.lname}
        </div>
        );
    }
}

export default AppFetch;