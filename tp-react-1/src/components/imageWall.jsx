import React from 'react';
export default class ImageWall extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const filterText = this.props.filterText.toLowerCase();
        const images= this.props.images.filter(imgData=>imgData.texte.toLowerCase().includes(filterText))
                                .map(imgData=><img src={imgData.image} alt={imgData.texte} title={imgData.texte} 
            onMouseOver = { () => this.props.imageChanged(imgData.image, imgData.texte) }  key={imgData.image}/>);
        return (
        <div id="mur">{images}</div>
        );

    }
   
   
}