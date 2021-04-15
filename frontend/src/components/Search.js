import React, { useState } from 'react'
import Favourites from './Favourites';
import Landing from './Landing';

//search component with props
const Search = ({ handleSubmit, handleChange, handleChangeMedia, loaded, favouriteItems, deleteFavourite }) => {

    //useState
    const [favouritesLoaded, setFavouritesLoaded] = useState(false);
    
    //onClick function 
    const handleClickFavourites = () => setFavouritesLoaded(true);


    //rendering the component 
    return (
        <div className="search">
            <div className="search-contents">
                
                <h1>Itunes Store</h1>

                <form onSubmit={handleSubmit} action="">
                    <input onChange={handleChange} type="text"/>
                    
                    <div className="options">
                        <select onChange={handleChangeMedia}>
                            <option>Select An Option :</option>
                            <option value="all">All</option>
                            <option value="music">Music</option>
                            <option value="musicVideo">Music Video</option>
                            <option value="movie">Movies</option>
                            <option value="shortFilm">Short Film</option>
                            <option value="tvShow">Tv Show</option>
                            <option value="podcast">Podcast</option>
                            <option value="audiobook">Audiobook</option>
                            <option value="ebook">EBook</option>
                            <option value="software">Software</option>
                        </select>

                        <button>Search</button>
                        <button onClick={handleClickFavourites}>Favourites</button>
                        
                    </div>
                    
                </form>

            </div>

            {favouritesLoaded && 
                <Favourites 
                    favouriteItems={favouriteItems} 
                    loaded={loaded} 
                    deleteFavourite={deleteFavourite}/> 
            }

            {loaded ? '' : <Landing />}

           
            
        </div>
    )
}

export default Search
