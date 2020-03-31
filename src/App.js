import React from 'react';
import './App.css';
import InputSearch from './components/input-search/input-search.jsx';
import MovieList from './components/movie-list/movie-list.jsx';


function App() {

  const  loadFromLocalStorage = (name) => { 
    return JSON.parse(localStorage.getItem(name));
  }

  const [list, setList] = React.useState([]);
  const [favorites, setFavorites] = React.useState(loadFromLocalStorage('favorites') || []);
  
  const getMovies = (inputValue) => { 
    const page = 1;
    const type = 'movie'; // movie, series, episode
    fetch(`https://www.omdbapi.com/?s=${inputValue}&plot=full&apikey=e477ed6a&page=${page}&type=${type}`)
    .then(response => {
      return response.json();
    }).then(result => {
      if(result.Search && result.Search.length > 0){
        setList([]);  
        setList(result.Search);    
      }else{
        setList([]);    
      }
    });
  }

  const cardSelected = (ev) => { 
    const id = ev.currentTarget.id;
    const newFav = searchById(id,list);
    const isAlreadyInFavs = searchById(id,favorites);
    
    if(newFav){ //Si se selecciona una tarjeta de busqueda
      if(!isAlreadyInFavs){ // Si no está en favoritos se añade
        saveToLocalStorage('favorites', [...favorites,newFav])
        setFavorites([...favorites,newFav]); 
      }else{ // Si ya se encuentra en favoritos, se borra
        saveToLocalStorage('favorites',  favorites.filter(elem => elem !== newFav))
        setFavorites(favorites.filter(elem => elem !== newFav)); 
      }
    }else{ //Si se selecciona una tarjeta de favoritos
        saveToLocalStorage('favorites', favorites.filter(elem => elem !== isAlreadyInFavs))
        setFavorites(favorites.filter(elem => elem !== isAlreadyInFavs));  
    }
  }

  const saveToLocalStorage = (name, item) => { 
    localStorage.setItem(name,  JSON.stringify(item));
  }


  const searchById = (id,arr) => { 
    for(const elem of arr){
      if(elem && elem.imdbID.toString() === id.toString()){
        return elem;
      }
    }
    return null;
  }

    return (
      <div className="App">
          <InputSearch buttonName={'busca'} actionToPerform={ getMovies }></InputSearch>
          <main>
            <aside className="aside">
              <MovieList list={favorites} cardSelected={ cardSelected } class="favorite" ></MovieList>
            </aside>
            <section className="section">
              <MovieList list={list}  cardSelected={ cardSelected } class="normal" ></MovieList>
            </section>
          </main>
      </div>
    );



}

export default App;
