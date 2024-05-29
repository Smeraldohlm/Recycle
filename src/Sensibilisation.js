import React from 'react';
import './Sensibilisation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Sensibilisation() {
    return (
        <div>
            <Navbar/>
            <br></br><br></br>
            <h1><center>Nos programmes de sensibilisation </center></h1>
            
        
        <div className="sensibilisation-page">
            
            <div className="rubrique1">
                <img src="https://th.bing.com/th/id/R.40150c18b2365cb3e979b568dc58b169?rik=893U%2ff3oYUaj7g&pid=ImgRaw&r=0" alt="Pourquoi nous recyclons?" />
                <h3>Pourquoi nous recyclons?</h3>
                <p>"Pourquoi nous recyclons ?" est une question fondamentale qui nécessite une réponse détaillée pour sensibiliser efficacement les gens au recyclage et à ses avantages</p>
                <a href="#"><center>En savoir plus <FontAwesomeIcon icon={faArrowRight} /></center></a>
            </div>
            <div className="rubrique1">
                <img src="https://th.bing.com/th/id/OIP.4j03kSLmFtpdxK771xFTOAHaHQ?rs=1&pid=ImgDetMain" alt="Étapes pour réaliser un bon produit recyclé" />
                <h3>Étapes pour réaliser un bon produit recyclé</h3>
                <p>La fabrication de produits recyclés est un processus complexe mais essentiel dans notre démarche vers une économie circulaire et durable..</p>
                <a href="#"><center>En savoir plus <FontAwesomeIcon icon={faArrowRight} /></center></a>
            </div>
        </div>
        <Footer/>
        </div>
    );
}

export default Sensibilisation;
