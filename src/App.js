import './App.css';
import React from 'react';
// import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#c8cca8'}}>
      <Header/>
      {/* <HomePage /> */}
      <GalleryPage />
      <Footer/>
    </div>
  );
}

export default App;
