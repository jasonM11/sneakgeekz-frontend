import { Routes, Route, Outlet, Link } from "react-router-dom";
import {useState} from "react"

function Layout() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [link, setLink] = useState("");
  function handleNameInput(event){
  setName(event.target.value)
  console.log(name)
  }
  function handleImageInput(event){
  setImage(event.target.value)
  console.log(image)
  }
  function handleUrlInput(event){
  setLink(event.target.value)
  console.log(link)
  }
  function handleSubmit(event){
  console.log("submitted")
  event.preventDefault();
  fetch('http://localhost:9292/sneakers', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    name: name,
    price: 0,
    release_date: 0,
    image_url: image,
    link_url: link

    })
})
.then(response => response.json())
.then(data => console.log(data))
  }
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <h1>DreamSneakz</h1>
      <h3> The Sneakers of Your Dreams</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">All Sneakers</Link>
          </li>
          {/* <li>
            <Link to="/about">About</Link>
          </li> */}
          <li>
            <Link to="/wishlist">Wishlist</Link>
          </li>
          
        </ul>
      </nav>

      <hr />
<form onSubmit = {handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" onChange = {handleNameInput} />
  </label>
    <label>
    Image Url:
    <input type="text" name="image_url" onChange={handleImageInput}/>
  </label>
  <label>
    Link to buy:
    <input type="text" name="link_url" onChange={handleUrlInput}/>
  </label>
  <input type="submit" value="Submit" />
</form>
      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;