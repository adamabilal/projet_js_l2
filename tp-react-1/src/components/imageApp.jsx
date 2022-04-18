import React from 'react';

import '../assets/style/murImages.css';

import ImageWall from './imageWall.jsx';
import dataImages from '../data/dataImages.js';
import ImageDetails from './imageDetails.jsx';

/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={image:"../images/image5.jpg" ,texte:"la plus belle...." ,filterText:''};
  }

  imageChanged(newImage,newTexte){
    this.setState({image:newImage,texte:newTexte});
  }
  filterChanged(newFilterTexte){
    this.setState({filterText:newFilterTexte});
  }
  render() {
      return (
        <div>
          <ImageWall  images={dataImages}  imageChanged={this.imageChanged.bind(this)} 
            filterText={this.state.filterText}/>
          <ImageDetails filterChanged={this.filterChanged.bind(this)} 
            image={this.state.image} texte={this.state.texte} /> 
        </div>
      );
  } 
}
