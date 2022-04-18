import React from 'react';
import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component {
    constructor(props) {
      super(props);
    }

    handleClick() {
       this.props.taskScaleChanged(this.props.valeur);
    }
    
    render(){
        return( 
        <div className={this.props.etat}>
          <div className="level"  onClick = { this.handleClick.bind(this) }></div>
        </div> );
    }

}