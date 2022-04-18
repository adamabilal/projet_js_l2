import React from 'react';
export default class ImageDetails extends React.Component{
    constructor(props) {
        super(props);
        this.filterValueChanged=this.filterValueChanged.bind(this);
        this.state={filterValue:""};
    }
    
    filterValueChanged(event){
        this.setState({filterValue:event.target.value})
        this.props.filterChanged(event.target.value);
    }
    render() {
        const image= <img 
            src={this.props.image} 
            alt={this.props.texte} 
            title={this.props.texte}/>;
        return (
        <div id="details">filterValue:
            <input id="filtre" type="text" placeholder="filtre image..." 
                value={this.state.filterValue} 
                onChange = {this.filterValueChanged}
            /> {image}
            <div id="legends">{this.props.texte}</div>
        </div>);
    }
}