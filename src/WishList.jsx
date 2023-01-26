import React from "react";
import SneakerListing from "./SneakerListing";

const WishList = ({ sneakers, onRemove }) => {
  return (
    <div className="wishlist">
      <h2>Wish List</h2>
      <ul>
        {sneakers.map((sneaker) => (
          <li key={sneaker.id}>
            <SneakerListing sneaker={sneaker} />
            <button onClick={() => onRemove(sneaker.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
