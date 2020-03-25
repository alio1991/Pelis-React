import React from 'react';
import './App.css';
import InputSearch from './components/input-search/input-search.jsx';
import MovieList from './components/movie-list/movie-list.jsx';


class  App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: [],
      favorites: this.loadFromLocalStorage('favorites') || []
    }
    // this.setState({favorites: this.loadFromLocalStorage('favorites')});   
    this.getMovies = this.getMovies.bind(this);
    this.cardSelected = this.cardSelected.bind(this);

  }

  // componentDidMount(){};

  render() { 
    const { getMovies } = this;
    const { cardSelected } = this;

    return (
      <div className="App">
          <InputSearch buttonName={'busca'} actionToPerform={ getMovies }></InputSearch>
          <main>
            <aside className="aside">
              <MovieList list={this.state.favorites} cardSelected={ cardSelected } class="favorite" ></MovieList>
            </aside>
            <section className="section">
              <MovieList list={this.state.list}  cardSelected={ cardSelected } class="normal" ></MovieList>
            </section>
          </main>
      </div>
    );
  }


  getMovies(inputValue){    
    // const inputValue = ev.currentTarget.previousElementSibling.value; 
    const page = 1;
    const type = 'movie'; // movie, series, episode
    fetch(`https://www.omdbapi.com/?s=${inputValue}&plot=full&apikey=e477ed6a&page=${page}&type=${type}`)
    .then(response => {
      return response.json();
    }).then(result => {
      if(result.Search && result.Search.length > 0){
        this.setState({list: []});  
        this.setState({list: result.Search});    
      }else{
        this.setState({list: []});    
      }
    });
  }

  cardSelected(ev){
    const id = ev.currentTarget.id;
    const newFav = this.searchById(id,this.state.list);
    const isAlreadyInFavs = this.searchById(id,this.state.favorites);
    
    if(newFav){ //Si se selecciona una tarjeta de busqueda
      if(!isAlreadyInFavs){ // Si no está en favoritos se añade
        this.saveToLocalStorage('favorites', [...this.state.favorites,newFav])
        this.setState({favorites: [...this.state.favorites,newFav] }); 
      }else{ // Si ya se encuentra en favoritos, se borra
        const favoritesCopy = Object.assign([],this.state.favorites);
        favoritesCopy.splice(favoritesCopy.indexOf(newFav),1);
        this.saveToLocalStorage('favorites', favoritesCopy)
        this.setState({favorites: [...favoritesCopy] }); 
      }
    }else{ //Si se selecciona una tarjeta de favoritos
        const favoritesCopy = Object.assign([],this.state.favorites);
        favoritesCopy.splice(favoritesCopy.indexOf(isAlreadyInFavs),1);
        this.saveToLocalStorage('favorites', favoritesCopy)
        this.setState({favorites: [...favoritesCopy] });  
    }
    
  }

  saveToLocalStorage(name, item){
    localStorage.setItem(name,  JSON.stringify(item));
  }

  loadFromLocalStorage(name){
    return JSON.parse(localStorage.getItem(name));
  }

  searchById(id,arr){
    for(const elem of arr){
      if(elem && elem.imdbID.toString() === id.toString()){
        return elem;
      }
    }
    return null;
  }

}

export default App;
