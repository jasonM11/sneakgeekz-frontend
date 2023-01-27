import React, {useEffect, useState} from "react";
import SneakerListing from "./SneakerListing";

const WishList = (sneakers) => {
console.log(sneakers)
  const [wishlist, setWishlist] = useState([])

  useEffect(() => {
    // GET request using fetch inside useEffect React hook
    fetch(`http://localhost:9292/sneakers/${sneakers.id}`)
        .then(response => response.json())
        .then(data => setWishlist(data));

// empty dependency array means this effect will only run once (like componentDidMount in classes)
}, []);
  const onRemove = (id) =>{
     fetch(`http://localhost:9292/wishlist/${id}`, { method: 'DELETE' })
  }
  return (
    <div className="wishlist">
      <h2>Wish List</h2>
      <ul>
        {wishlist.map((wish) => (
          <li key={wish.sneaker.id}>
            <SneakerListing sneaker={wish.sneaker} />
            <button onClick={() => onRemove(wish.sneaker.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
