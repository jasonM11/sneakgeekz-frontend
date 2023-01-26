// components/SneakerListing.js
import React from 'react';

function SneakerListing({sneaker}) {
    // handleAddToWishList = (sneaker) => {
    //     this.sneaker.addToWishList(sneaker);
        
    //     // Functionality to add sneaker to wishlist
    // }
    
    return (
        <div className="sneaker-listing">

            {/* <img src={sneaker.image} alt={sneaker.model} /> */}
            <p>{sneaker.name}</p>
            <p>{sneaker.price}</p>
            <p>{sneaker.release_date}</p>
            <a href={sneaker.link_url}>Buy me</a>
            {/* <button onClick={() => this.handleAddToWishList(sneaker)}>Add to Wishlist</button> */}
        </div>
    );
}

export default SneakerListing;
