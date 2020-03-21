import React from 'react';
import './App.css';
import InputSearch from './components/input-search/input-search.jsx';
import MovieList from './components/movie-list/movie-list.jsx';


class  App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: []
    }
    this.getMovies = this.getMovies.bind(this);
  }

  // componentDidMount(){};

  render() { 
    const { getMovies } = this;

    return (
      <div className="App">
        <InputSearch buttonName={'busca'} actionToPerform={ getMovies }></InputSearch>
        <MovieList list={this.state.list}></MovieList>
      </div>
    );
  }


  getMovies(ev){    
    const inputValue = ev.currentTarget.previousElementSibling.value; 
    const page = 1;
    const type = 'movie'; // movie, series, episode
    fetch(`https://www.omdbapi.com/?s=${inputValue}&plot=full&apikey=e477ed6a&page=${page}&type=${type}`)
    .then(response => {
      return response.json();
    }).then(result => {
      if(result){
        this.setState({list: result.Search});    
      }else{
        alert('Pelicula no encontrada');
      }
    });
  }

}

export default App;
