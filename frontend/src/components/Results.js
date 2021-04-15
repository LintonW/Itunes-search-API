import React from 'react'
import StarHover from '../images/Untitled.svg';

//results component with props
const Results = ({ result, loaded, addFavourite }) => {

    //getting the favourited item
    const getSelected = (item) => addFavourite(item);


    //using map to render the results 
    return (
        <div className="results-section">

            {loaded && result.map((item) =>
            <div key={item.trackId} className="result">

                <img className="img-result" src={item.artworkUrl100} alt="Logo"/>

                <div className="details">
                    <p className="p-trackName-result">{item.trackName}</p>                
                    <p className="p-artistName-result">{item.artistName}</p>
                </div>

                <div className="favourites-btn">
                    <img 
                        onClick={() => getSelected(item)}
                        src={StarHover} alt="favourite"/>
                </div>

            </div>
            )}
            
        </div>
    )
}

export default Results
