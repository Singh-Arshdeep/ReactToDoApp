import React from 'react';

class AppFetch extends React.Component {

    constructor() {
        super();
        this.state={
            data:{}
        }
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

    render() {
        return(
        <h2>Hello world  {this.state.data.name}</h2>
        );
    }
}

export default AppFetch;