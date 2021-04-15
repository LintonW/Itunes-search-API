//importing react, useState & useEffect
import React, { useState, useEffect } from 'react'
//importing the css
import './App.css';
//importing components
import Search from './components/Search';
import Results from './components/Results';

//app component 
function App() {
  //useState
  const [items, setItems] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [isLoaded, setLoaded] = useState(false);
  const [searchResultTerm, setSearchResultTerm] = useState('');
  const [searchResultMedia, setSearchResultMedia] = useState('');


  //useEffect to fetch from own express api 
  useEffect(() => {
    fetch('/api/favourites')
    .then(response => response.json())
    .then(json => {
        setFavourites(json)
        
    });
    
  }, [favourites]);
  

  //getting the term and the media 
  const handleChange = (e) => {
    let term = e.target.value;
    term = term.replace(" ", "+" ).trim().toLowerCase();

    setSearchResultTerm(term)
  }

  const handleChangeMedia = (e) => {
    setSearchResultMedia(e.target.value)
  }


  //handling the form submit 
  const handleSubmit = async (e) => {
    //preventing the form from loading 
    e.preventDefault();

    //if term and media have values -> fetch 
    if (searchResultTerm && searchResultMedia) {
      const response = await fetch(`/api/search/${searchResultTerm}/${searchResultMedia}`);
      const data = await response.json();
      const item = data.results;

      //setting the state
      setItems(item);
      setLoaded(true);
        
    }
    
  }


  //handling POST 
  const addFavourite = (item) => {
    //alert
    alert('Added To Favourites!');

    //using fetch api to POST data to server
    fetch("/api/favourites", {
        //method
        method: "POST",
        //headers
        headers: {
            "Content-Type": "application/json"
        },
        //body data
        body: JSON.stringify({ 
            id: item.trackId,
            title: item.trackName,
            artist: item.artistName,
            type: item.kind 
        }),
    })
    .then(res => res.json())
    .then(response => alert('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error));
  }

  
  //handling DELETE
  const deleteFavourite = (favourite) => {
    alert('Item Removed From Favourites!');

    //using fetch api to DELETE data to server
    fetch("/api/favourites", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ 
            id: favourite.id
        }),
    })
    .then(res => res.json())
    .then(response => alert('Success:', JSON.stringify(response)))
    .catch(error => console.log('Error:', error));
  }


  //rendering the components
  return (
    <div className="App">

        <Search 
          handleSubmit={handleSubmit} 
          handleChange={handleChange} 
          handleChangeMedia={handleChangeMedia} 
          loaded={isLoaded}
          favouriteItems={favourites}
          deleteFavourite={deleteFavourite}
        />

        {isLoaded &&
          <Results 
          result={items}
          loaded={isLoaded}
          addFavourite={addFavourite}
          
          />
        }
        
    </div>
  );
}

export default App;
