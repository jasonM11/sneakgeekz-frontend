// api/sneakers.js
// import axios from 'axios';
import SneakerListing from "./SneakerListing";
import { useEffect, useState } from "react";

function SneakerContainer({}) {
    
    // const fetchSneakers = async () => {
    //     try {
    //         const response = await axios.get('https://sneaker-api.com/sneakers');
    //         return response.data;
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    const [sneakers, setSneakers] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/sneakers')
        .then(response => response.json())
        .then(sneakers => setSneakers(sneakers))
    }, [])

    console.log(sneakers)

    const sneakerList = sneakers.map((sneaker) => (
        <li key={sneaker.id}>
            <SneakerListing sneaker={sneaker} />
            {/* <button onClick={() => onRemove(sneaker.id)}>Remove</button> */}
        </li>
      ))

    return(
        <>
        {sneakerList}
        </>
    )

}

export default SneakerContainer;
