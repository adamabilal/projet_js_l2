import '../assets/style/app.css'
import currenties from '../data/currencies.js';
import Currency from './currency.jsx';


import React from 'react';
export default class ConvertAppV1 extends React.Component {
    constructor(props) {
        super(props);
        this.state={euro:1,currenties:[]};
    }
    euroChanged(newEuroValue){
        this.setState({euro:parseFloat(newEuroValue)});
    }

    componentDidMount() {
        currenties.fetch(currenties).then( data => this.setState({ currenties : data }) );
      }
    render(){
        return(
            <div id="currenties">
            {/*     <Currency amount={this.state.amount} 
                amountChanged={this.amountChanged.bind(this)} 
                currenties={currenties} euro code rate symbol  /> */}

                <Currency euro={this.state.euro} euroChanged={this.euroChanged.bind(this)}  code={currenties[0]} rate symbol />
                </div>
        );
    }
}