import React from 'react';
import './movie-card.css';

class  MovieCard extends React.Component {

  render() { 

      return (  
          <div className="movie-card">
            {/* {console.log(this.props.movie)} */}
            <p>{this.props.movie.Title}</p>
            <img src={this.props.movie.Poster} alt="Movie"></img>
          </div> 
      );
  }
}
 
export default MovieCard;