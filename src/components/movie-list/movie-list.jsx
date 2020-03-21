import React from 'react';
import './movie-list.css';
import MovieCard from '../movie-card/movie-card.jsx'

class MovieList extends React.Component {

 render(){
     return (
         <div className="card-container">
            { this.props.list.map(movie => 
                <MovieCard key={movie.imdbID} movie={movie}></MovieCard>
            )}
         </div>
     )
 };
}

export default MovieList;