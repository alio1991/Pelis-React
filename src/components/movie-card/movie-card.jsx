import React from 'react';
import './movie-card.css';
import * as image from '../../../src/assets/images/no-image.jpg'

class  MovieCard extends React.Component {

  render() { 
    const {cardSelected } = this.props;
      return (  
          <div id={this.props.movie.imdbID} className={this.props.class} onClick={cardSelected}>
            <p>{this.getTitle()}</p>
            <img src={this.getSrc()} onError={this.errorSrc} alt="Movie" ></img>
          </div> 
      );
  }

  getTitle(){
    return this.props.movie.Title.length < 41 || this.props.class==='normal' ? this.props.movie.Title : this.props.movie.Title.substr(0,40)+'...'
  }

  getSrc(){
    return this.props.movie.Poster === 'N/A' ? image : this.props.movie.Poster;
  }

  errorSrc(ev){
    ev.currentTarget.onError = null;
    ev.currentTarget.src = image;
  }

}
 
export default MovieCard;