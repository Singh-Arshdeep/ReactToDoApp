import React from 'react';

class TemperatureInput extends React.Component {

    render() {
        return(
            <div style={{border:'solid',width:'50%', margin:'auto', padding:30}}>
              {this.props.tempType} 
              <input 
              style={{width:'40%', margin:'auto'}} 
              type="text"
              onChange={(event)=>this.props.change(this.props.tempType, event.target.value)}
              value={this.props.val}/>
              {this.props.children}    
            </div>
        );
    }

}

export default TemperatureInput;

//onChange={(e)=>this.handleChange(this.props.tempType,e)}