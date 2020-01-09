import React from 'react';
import './ToDo.css';

class ToDo extends React.Component {

    componentDidMount() {
        //Call the api to load data and stuff
        //You can chnage the state here
    }

    shouldComponentUpdate(_nextProps, _nextState) {
        return true;
    }

    componentWillUnmount() {
        //Cleanup
    }

    render() {
        const checkBoxStyle = {
            height:20,
            width:20
        }
        return(
            <div className="toDoList">
                <input style={checkBoxStyle} type="checkbox" 
                checked={this.props.isComplete}
                onChange={()=>{this.props.handleChange(this.props.id)}}
                />
                <h2 style={{margin:0}}
                className={this.props.isComplete ? "strikeName" : undefined}
                >{this.props.name}</h2>
                <hr/>
            </div>
        );
    }
}

export default ToDo;