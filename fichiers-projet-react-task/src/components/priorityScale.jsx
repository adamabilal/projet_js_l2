import '../assets/style/priorityScale.css';

import React from 'react';
import PriorityLevel from './priorityLevel.jsx';

export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
      <div className="scale">
          {this.props.levels
                      .map(l => {
                        if (l <= this.props.taskScale){ 
                          return <PriorityLevel  taskScaleChanged= {this.props.taskPriorityChange} etat="on" valeur={l} key={l}/>
                        }
                        else{ 
                          return <PriorityLevel  taskScaleChanged={ this.props.taskPriorityChange} etat="off" valeur={l} key={l}/>
                        }
                      })
   }
    </div>
    );
  }
}