import '../assets/style/currency.css';

import currenties from '../data/currencies.js';


import React from 'react';
export default class Currency extends React.Component {
    constructor(props) {
        super(props);
        this.state={euroValue:1};
        this.euroValueChanged=this.euroValueChanged.bind(this);

    }
    euroValueChanged(event){
        this.setState({euroValue:parseFloat(event.target.value)})
        this.props.euroChanged(event.target.value);

        
    }
    render(){ 
       
        return(
            <div id="currency">
                    <input id="app" type="numeric" value={this.state.euroValue} 
                    onChange = {this.euroValueChanged.bind(this)}/>€
                    <button type="submit" value="OK">OK</button><br/>
                    
            </div>
        );
   
}
}