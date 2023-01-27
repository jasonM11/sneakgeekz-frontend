
import React, {useEffect, useState} from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './Layout';
import SneakerContainer from './SneakerContainer';
import './App.css';
// import About from './About';
import WishList from './WishList';

function App() {

  const [sneakers, setSneakers] = useState([])
// console.log(sneakers)
    useEffect(() => {
        fetch('http://localhost:9292/sneakers')
        .then(response => response.json())
        .then(sneakers => setSneakers(sneakers))
    }, [])

return (
  <div>
    <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="/" element={<SneakerContainer sneakers={sneakers} setSneakers={setSneakers} />} />
          <Route path="/sneakers" element={<SneakerContainer sneakers={sneakers} setSneakers={setSneakers} />} />
          <Route path="/wishlist" element={<WishList sneakers={sneakers} setSneakers={setSneakers}/>} />
      </Route>
    </Routes>
  </div>
);
}

export default App;