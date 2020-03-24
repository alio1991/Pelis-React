import React from 'react';
import './movie-card.css';

class  MovieCard extends React.Component {

  render() { 
    const {cardSelected } = this.props;
      return (  
          <div id={this.props.movie.imdbID} className="movie-card" onClick={cardSelected}>
            <p>{this.props.movie.Title}</p>
            <img src={this.props.movie.Poster !== 'N/A' ? this.props.movie.Poster : '../../assets/images/no-image.jpg'} alt="Movie" ></img>
          </div> 
      );
  }
}
 
export default MovieCard;