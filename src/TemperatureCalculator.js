import React from 'react';
import TemperatureInput from './TemperatureInput';

class TemperatureCalculator extends React.Component {
    
    constructor() {
        super();
        this.state = {
            Ctemp:"",
            Ftemp:""
        }
    }

    handleChange() {
        
    }

    render() {
        return(
            <div>
                <TemperatureInput tempType="Celcius:" change={this.handleChange}
                val={this.state.temp}/>
                <TemperatureInput tempType="Fahrenheit:" change={this.handleChange}
                val={this.state.temp}
                />
            </div>
        );
    }
}

export default TemperatureCalculator;
