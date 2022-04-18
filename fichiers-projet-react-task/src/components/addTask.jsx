import React from 'react';
import '../assets/style/addtask.css';


export default class AddTask extends React.Component {
    constructor(props) {
      super(props);
      this.state={desription:"", duration:10 , priority:1,tasks:this.props.tasks };
    }

    descriptionChange(event){
        this.setState({description:event.target.value});
    }
    durationChange(event){
        this.setState({duration:parseInt(event.target.value)});
    }
    
    handleAdd(){
        const tasks= this.props.tasks.slice();
        tasks.push({id:this.props.id,description:this.state.description,
            duration:this.state.duration,priority:this.state.priority});
        this.setState({tasks:tasks});
        this.props.todoChanged(tasks);
    }

    render(){
        const description=<input type="text" 
                                 placeholder="decription" 
                                 value={this.state.description} 
                                 onChange={this.descriptionChange.bind(this)}
                                />;

        const duration= <input type="number" min="0" 
                               value={this.state.duration} 
                               onChange={this.durationChange.bind(this)}   
                            />;
        return(
        <div className="addTask"> 
            {description}
            {duration}<span>min</span>
            <button type="submit" onClick={this.handleAdd.bind(this)}>add</button>
        </div>
    );
}

}
