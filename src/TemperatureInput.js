import React from 'react';

class TemperatureInput extends React.Component {

    render() {
        return(
            <div style={{border:'solid',width:'50%', margin:'auto', padding:30}}>
              {this.props.tempType} 
              
              <input 
              style={{width:'40%', margin:'auto'}} 
              type="text"
              onChange={()=>{this.props.change(this.props.tempType, this.props.val)}}
              value={this.props.val}/>
              
            </div>
        );
    }

}

export default TemperatureInput;