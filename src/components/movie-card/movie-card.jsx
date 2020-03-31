import React from 'react';
import './movie-card.css';
import * as image from '../../../src/assets/images/no-image.jpg'

const MovieCard = (props) => {

    const getTitle= () => {
      return props.movie.Title.length < 41 || props.class==='normal' ? props.movie.Title : props.movie.Title.substr(0,40)+'...'
    }

    const getSrc= () => {
      return props.movie.Poster === 'N/A' ? image : props.movie.Poster;
    }

    const errorSrc= (ev) => {
      ev.currentTarget.onError = null;
      ev.currentTarget.src = image;
    }
  
    const {cardSelected } = props;
      return (  
          <div id={props.movie.imdbID} className={props.class} onClick={cardSelected}>
            <p>{getTitle()}</p>
            <img src={getSrc()} onError={errorSrc} alt="Movie" ></img>
          </div> 
      );



}
 
export default MovieCard;