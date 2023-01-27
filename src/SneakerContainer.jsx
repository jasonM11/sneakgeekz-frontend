// api/sneakers.js
// import axios from 'axios';
import SneakerListing from "./SneakerListing";
import { useEffect, useState } from "react";

function SneakerContainer({sneakers, setSneakers}) {
    
    // const fetchSneakers = async () => {
    //     try {
    //         const response = await axios.get('https://sneaker-api.com/sneakers');
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    // console.log(sneakers)

    const sneakerList = sneakers.map((sneaker) => (
        <li key={sneaker.id}>
            <SneakerListing sneaker={sneaker} />
        </li>
      ))

    return(
        <div className="SneakerContainer">
        {sneakerList}
        </div>
    )

}

export default SneakerContainer;
