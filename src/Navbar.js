import logoRecyclage from './loogoo.PNG';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';
import React , { useState } from 'react';
import './App.css';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function Navbar(){
    const [activeLink, setActiveLink] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [showLogin, setShowLogin] = useState(false);
  
    const handleLinkClick = (link) => {
      setActiveLink(link);
    };
  
    const handleChange = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Recherche soumise :', searchTerm);
    };
  
    const handleAccountClick = () => {
      setShowLogin(!showLogin);
    };
  
    return (
    <nav className="nav">
        <div className="kid-area">
            <img src={logoRecyclage} alt="Logo Recycle" sizes='2x' style={{ width: '60px', marginRight: '10px' }} />
            <span className="text-lg font-semibold text-blue-500 dark:text-purple-300">  RecycleCreate </span>
        </div>
        <form className="search-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Entrer pour rechercher" className="search-input" value={searchTerm} onChange={handleChange}/>
            <button type="submit" className="search-button">
                <FontAwesomeIcon icon={faSearch} />
            </button>
        </form>
        <a href="/produits" onClick={() => handleLinkClick('recyclage')} className={activeLink === 'recyclage' ? 'active' : ''}>
            Produits
        </a>
        <a href="/Sensibilisation" onClick={() => handleLinkClick('sensibilisation')} className={activeLink === 'sensibilisation' ? 'active' : ''}>
            Sensibilisation
        </a>
        <a href="#" onClick={() => handleLinkClick('ptcollect')} className={activeLink === 'ptcollect' ? 'active' : ''}>
            Points collectes
        </a>
        
        <a href="#" onClick={handleAccountClick} className="account-icon">
            <FontAwesomeIcon icon={faUser} />
        </a>
        <a href="/cart" className="cart-icon">
            <FontAwesomeIcon icon={faCartPlus} />
        </a>
        {showLogin && (
        <div className="account-options">
            <a href="/connexion">Se connecter</a>
            <a href="/inscription">S'inscrire</a>
        </div>
        )}
    </nav>
);
}
export default Navbar;
