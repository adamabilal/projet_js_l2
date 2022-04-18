import React from 'react';
import '../assets/style/doneButton.css';

export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state={doneTasks:this.props.tasksDone}
  }

  handleClick(){
    const doneTasks= this.props.tasksDone.slice();
    doneTasks.push({id:this.props.id ,description:this.props.description, duration:this.props.duration, priority:this.props.priority });
    this.setState({doneTasks:doneTasks});
    this.props.tasksDoneChanged(doneTasks);
    this.tasksTodo=this.props.tasksTodo.filter(t=>this.props.id != t.id) ;
    this.props.tasksTodoChanged(this.tasksTodo);
  
  }

  render(){
    return(
      <div className="doneButton" onClick={this.handleClick.bind(this)}>v</div>
    );
  }

}