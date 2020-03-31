import React from 'react';
import './movie-list.css';
import MovieCard from '../movie-card/movie-card.jsx'

const MovieList = (props) => {

    const { cardSelected } = props;
     return (
         <div className="card-container">
            { props.list.map((movie,i) => 
                <MovieCard class={props.class} key={movie.imdbID+i} movie={movie} cardSelected={ cardSelected }></MovieCard>
            )}
         </div>
     )
}

export default MovieList;