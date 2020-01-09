import React from 'react';
import ToDo from './components/ToDo';
import toDoListData from './toDoListData';

class App extends React.Component {
  
  constructor() {
    super();
    this.state = {
      toDoList:toDoListData
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {

    this.setState(prevState=>{
      
      const updatedTodos = prevState.toDoList.map(
        (toDoItem)=> {
          if(toDoItem.key===id) {
            toDoItem.isComplete=!toDoItem.isComplete
          } 
          return toDoItem;
        }
      )
      
      //Returning Updated state
      return {
        toDoList:updatedTodos
      }
    });
  }

  render() {
    const todoData=this.state.toDoList.map(
      (item)=>  <ToDo 
        name={item.name} id={item.key} isComplete={item.isComplete}
        handleChange={this.handleChange} key={item.key}
      />
    );
    return (
      <div>
        {todoData}
      </div>
    );
  }
}

export default App;
