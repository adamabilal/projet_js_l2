import React from 'react';
import PriorityScale from './priorityScale.jsx';
import '../assets/style/task.css';
import DoneButton from'./doneButton.jsx';

export default class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state={scale:this.props.priority}
     
    }

    changePriority(newPriority){
      this.setState({scale:newPriority});
     this.props.taskPriorityChange(newPriority);

    }
    
    render(){
        const task=this.props.description +"(" +this.props.duration+"mn) ";
        const scale=<PriorityScale  taskPriorityChange={this.changePriority.bind(this)} 
                                    taskScale={this.state.scale} levels={[1,2,3,4,5,6]}/>;
        
        return(   
        <div className="task"> 
            <div className="info"> {task} </div>
            {scale}
            <span>({this.state.scale})</span>
            <DoneButton  tasksDone={this.props.tasksDone} tasksDoneChanged={this.props.tasksDoneChanged} 
                        tasksTodo={this.props.tasksTodo} tasksTodoChanged={this.props.tasksTodoChanged} 
                        id={this.props.id} description={this.props.description} duration={this.props.duration} 
                        priority={this.state.scale} />
        </div>

        );
    }

}