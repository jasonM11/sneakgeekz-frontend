import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import SneakerListing from "./SneakerListing";

const SwipeableSneakerListings = ({ sneakers }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSwipe = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SwipeableViews index={currentIndex} onChangeIndex={handleSwipe}>
      {sneakers.map((sneaker) => (
        <SneakerListing key={sneaker.id} sneaker={sneaker} />
      ))}
    </SwipeableViews>
  );
};

export default SwipeableSneakerListings;
