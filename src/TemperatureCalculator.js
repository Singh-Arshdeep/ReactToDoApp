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

    handleChange=(tempType, tempVal) => {
        console.log(tempType);
        this.setState(
            (prevState) => {
                return {
                    Ctemp:tempVal,
                    Ftemp:tempVal
                }
            }
        );
        // return((tempType==="Celcius:")?
        // ()=> {
        // this.setState(state => ({
        //     Ftemp:((state.Ctemp -32) * 5/9)
        // }))}
        // :
        // ()=> {
        // this.setState(state => ({
        //     Ctemp:((this.state.Ftemp * 9/5) + 32)
        // })) })
    }

    render() {
        return(
            <div>
                <TemperatureInput tempType="Celcius:" change={this.handleChange}
                val={this.state.Ctemp}/>
                <TemperatureInput tempType="Fahrenheit:" change={this.handleChange}
                val={this.state.Ftemp}
                />
            </div>
        );
    }
}

export default TemperatureCalculator;
