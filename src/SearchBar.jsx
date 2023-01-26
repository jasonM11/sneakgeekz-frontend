import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchCriteria, setSearchCriteria] = useState({
    brand: "",
    model: "",
    releaseDate: "",
    price: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({ ...searchCriteria, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCriteria);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={searchCriteria.brand}
        onChange={handleChange}
      />
      <input
        type="text"
        name="model"
        placeholder="Model"
        value={searchCriteria.model}
        onChange={handleChange}
      />
      <input
        type="date"
        name="releaseDate"
        placeholder="Release Date"
        value={searchCriteria.releaseDate}
        onChange={handleChange}
      />
      <input
        type="text"
        name="price"
        placeholder="Price"
        value={searchCriteria.price}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
