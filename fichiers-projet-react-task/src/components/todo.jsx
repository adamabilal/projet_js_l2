import React from 'react';
import Task from './task.jsx';
import '../assets/style/tasklist.css';
export default class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.filterChanged=this.filterChanged.bind(this);
      this.state={filter:"",priority:1};
    }

    filterChanged(event){
      this.setState({filter:event.target.value});
    }

    taskPriorityChange(newPriority){
      this.setState({priority:newPriority});
    }

    render(){
      //liste de taches
      const filterText = this.state.filter.toLowerCase();
      this.tasks= this.props.tasks.sort(function(a, b){return a.priority - b.priority})
                        .filter(t=>t.description.toLowerCase().includes(filterText))
                         //Chaque tâche est un composant;
                        .map(t=>(<Task key={t.id}  id={t.id} description={t.description} duration={t.duration} 
                          priority={this.state.priority}  tasksTodo={this.props.tasks} tasksTodoChanged={this.props.todoChanged} 
                          tasksDone={this.props.done} tasksDoneChanged={this.props.doneChanged} 
                          taskPriorityChange={this.taskPriorityChange.bind(this)}/>))
                          //.sort(function(a, b){return a.priority - b.priority}).reverse()
      ;
      const duree=this.props.tasks .filter(t=>t.description.toLowerCase().includes(filterText)).reduce ( (acc, t) => acc+t.duration, 0);
      return(
      <div className= 'taskList'>  
        <h3>Tâches en cours</h3>
        <input id="filtre" type="text" placeholder="filtre..." 
              value={this.state.filter}  onChange = {this.filterChanged} />
        <p>Il reste {this.tasks.length} tâches en cours. Pour une durée de {duree} mn. </p>
        {this.tasks.sort(function(a, b){return  b.priority - a.priority})};
      </div>);
    }

}