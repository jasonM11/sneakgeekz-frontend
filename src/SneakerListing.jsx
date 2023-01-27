//  components/SneakerListing.js
import React from 'react';
import { useState } from 'react';

function SneakerListing({sneaker}) {
//         handleAddToWishList = (sneaker) => {
//         this.sneaker.addToWishList(sneaker);
        
//         // Functionality to add sneaker to wishlist
//     }

    const [isFavorite, setIsFavorite] = useState(false)

    function handleClick(){
        setIsFavorite(!isFavorite)
//         if(isFavorite===true){
//             console.log(sneaker)
//             fetch (`http://localhost:9292/wishlist`,{
//                method: 'POST',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//     image_url: sneaker.image_url,
//     name: sneaker.name,
//     price: sneaker.price,
//     release_date: sneaker.release_date,
//     link_url: sneaker.link_url,
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data));

//         }
    }

    // console.log(sneaker)
    return (
        <div className="sneaker-listing">
            {isFavorite ? (
                <button onClick={handleClick} >❤️</button>
            ):(
                <button onClick={handleClick} >♡</button>
            )}
            <img src={sneaker.image_url} alt={sneaker.model} />
            <p>{sneaker.name}</p>
            <p>${sneaker.price}</p>
            <p>Release Date: {sneaker.release_date}</p>
            <a href = {sneaker.link_url} target = "_blank">Buy me</a>
            {/* target = new tab */}
            {/* <button onClick={() => this.handleAddToWishList(sneaker)}>Add to Wishlist</button> */}
        </div>
    );
}

export default SneakerListing;