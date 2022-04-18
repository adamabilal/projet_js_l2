import React from 'react';

import DoneTask from'./doneTask.jsx';

export default class Done extends React.Component {
  constructor(props) {
    super(props);
    this.state={affiche:true}
  }
  handleClick(){
    this.setState( (prevState) => ({affiche : !prevState.affiche}));
  }

  render(){
     const affichageComposant=this.state.affiche ? " " : this.props.done.map(t=>(<DoneTask  key={t.id} {...t} />)) ;
      return(
      <div className="taskList">
        <h3>Tâches terminées <button onClick={this.handleClick.bind(this)}>{this.state.affiche? "+("+this.props.done.length+")": '-'}</button></h3>
        <div className="done">{ affichageComposant}</div>
      </div>
      );
  }

}