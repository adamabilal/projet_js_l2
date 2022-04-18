import React from 'react';
import '../assets/style/task.css';

export default class DoneTask extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        const doneTask=this.props.description +"(" +
                                this.props.duration+"mn)(priorité:"+
                                    this.props.priority +") \n";
        return(   
        <div className="task">
            {doneTask}
        </div>
        );
    }

}