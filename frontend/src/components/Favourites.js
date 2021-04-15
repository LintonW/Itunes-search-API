import React from 'react'
//importing svg
import Close from '../images/close-round-line.svg'; 
import Delete from '../images/close-red.svg';

//favourites component
const Favourites = ({ favouriteItems, deleteFavourite }) => {

    //refreshing the page 
    const refreshPage = () => window.location.reload();

    //getting the item to delete
    const deleteF = (favourite) => deleteFavourite(favourite);


    //rendering the favourites
    return (
        <div className="favourites-section">
            
            <div className="close-img-section">
                <img className="close-img" onClick={refreshPage} src={Close} alt="close"/>
            </div>

            <h1 className="favourites-h1">Favourites</h1>

            <div className="favourites-table">
                <div className="container">
                    <table>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Artist</th>
                                <th>Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {favouriteItems.map(favourite => ( 
                                <tr key={favourite.id}>
                                    <td>{favourite.title}</td>
                                    <td>{favourite.artist}</td>
                                    <td>{favourite.type}</td>
                                    <td><img className="delete-btn" onClick={() => deleteF(favourite)} src={Delete} alt=""/></td>
                                    
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            
        </div>
    )
}

export default Favourites
