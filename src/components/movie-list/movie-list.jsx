import React from 'react';
import './movie-list.css';
import MovieCard from '../movie-card/movie-card.jsx'

class MovieList extends React.Component {

 render(){
    const {cardSelected } = this.props;
     return (
         <div className="card-container">
            { this.props.list.map((movie,i) => 
                <MovieCard class={this.props.class} key={movie.imdbID+i} movie={movie} cardSelected={ cardSelected }></MovieCard>
            )}
         </div>
     )
 };

}

export default MovieList;