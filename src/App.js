import './App.css';
import React from 'react';
// import HomePage from './pages/HomePage';
import ProjectsList from './features/projects/ProjectsList';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App" style={{ backgroundColor: '#c8cca8'}}>
      <Header/>
      {/* <HomePage /> */}
      <ProjectsList />
      <Footer/>
    </div>
  );
}

export default App;
