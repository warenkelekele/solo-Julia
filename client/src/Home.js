import React from 'react';
import './Home.css'; 

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenue sur mon site !</h1>
        <p>Ceci est la page d'accueil de mon application React.</p>
        <a href="#contact" className="home-button">Contactez-nous</a>
      </header>
    </div>
  );
};

export default Home;
