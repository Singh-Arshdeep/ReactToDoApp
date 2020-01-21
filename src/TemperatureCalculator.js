import React from 'react';
import TemperatureInput from './TemperatureInput';
import toDoListData from './toDoListData';
import Todo from './Todo';
class TemperatureCalculator extends React.Component {
    
    constructor() {
        super();
        this.state = {
            Ctemp:"",
            Ftemp:""
        }
    }

    componentDidMount() {
        console.log(toDoListData);
    }

    handleChange=(tempType, tempVal) => {
        tempType==="Celcius"?
        (this.setState(
            (prevState) => {
                return {
                    Ctemp:tempVal,
                    Ftemp:(tempVal * 9/5) + 32
                }
            }
        ))
        :
        (this.setState(
            (prevState) => {
                return {
                    Ctemp:(tempVal - 32) * 5/9 ,
                    Ftemp:tempVal
                }
            }
        ))
  
    }

    render() {
        return(
            <div>
                <TemperatureInput tempType="Celcius" change={this.handleChange}
                val={this.state.Ctemp}>
                    <p>Well hello there! I am composition</p>
                </TemperatureInput>
                <TemperatureInput tempType="Fahrenheit" change={this.handleChange}
                val={this.state.Ftemp}
                />
                <div>{ (this.state.Ctemp>=100)?"Water will boil":"Not boiling"}</div>
                <Todo/>
            </div>
        );
    }
}

export default TemperatureCalculator;
