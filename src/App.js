
import './App.css';
import Header from './Header';
import SneakerContainer from './SneakerContainer';

function App() {
  return (
    <>
      <div class="header">
        <a href="#default" class="logo">Sneakgeeks</a>
        <div class="header-right">
          <a class="active" href="#home">❤️</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>
      <Header/>
      
      
      <SneakerContainer/>
    </>
  );
}

export default App;