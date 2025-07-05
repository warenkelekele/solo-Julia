import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';

<Link to="/about">
  <button>À propos</button>
</Link>

const Home = () => {
  return (
    <div className="home-container">
      <h1 className="home-header">Bienvenue sur la page d'accueil
      <Link to="/about">
        <button>À propos</button>
      </Link>
      <Link to="/contact">
        <button>Contact</button>
      </Link> </h1>
      </div>
      )
      };

    


export default Home;
