import React from 'react';
import Todo from './todo.jsx';
import AddTask from './addTask.jsx';
import Done from './done.jsx';
import '../assets/style/taskApp.css';
import tasks from '../data/tasksData.js';
/*
 define root component
*/
export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={Todo:[],Done:[]}
  }

  componentDidMount(){
    this.setState({Todo:tasks.map(t=>({...t,priority:1}))});
  }
  todoChanged(newTask){
    this.setState({Todo:newTask});
  }

  doneChanged(newDoneTask){
    this.setState({Done:newDoneTask});
  }

  render() {
    return (
      <div className="taskApp">
        <AddTask id={"T"+(this.state.Todo.length+this.state.Done.length+1)} tasks={this.state.Todo} todoChanged={this.todoChanged.bind(this)} /> <br/>
        <Todo tasks={this.state.Todo} todoChanged={this.todoChanged.bind(this)} done={this.state.Done}  doneChanged={this.doneChanged.bind(this)} />
        <Done done={this.state.Done}/>
      </div>
    );
  }
}
