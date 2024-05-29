import React from 'react';
import './App.css';
import background from './eer.JPEG';
import Navbar from './Navbar';
import ProductGrid2 from './ProductGrid2';
import DescriptionProjet from './Description';
import Footer from './Footer';
import Sensibilisation2 from './Sensibilisation2';


function Homepage() {
  return(
  <div className='App'>
    <Navbar></Navbar>
    <section className="hero-section">
      <div className="hero-image">
        <img src={background} alt="Nom de votre jeu" />
      </div>
      <div className="hero-content">
        <h2>Recyclez avec RecycleCreate</h2>
        <h1>Inspirez,Recyclez ,Vendez</h1>
        <h3>Ensemble, agissons pour l'environnement avec RecycleCreate : une plateforme dédiée au recyclage des déchets.
             Rejoignez-nous pour donner une nouvelle vie à vos déchets et contribuer à un avenir plus durable.</h3>
          
        <a href="/vente" className="cta-button">
            Vendre un produit 
        </a> 
        <a href="/produits" className="cta-button">
            Acheter un produit
        </a>
      </div>
    </section>
    <br></br><br></br><br></br><br></br>
    <h1><center>Nos produits populaires RecycleCreate</center></h1>
    <br></br><br></br><br></br><br></br>
    <ProductGrid2/>
    <DescriptionProjet/>
    <br></br><br></br><br></br>
    <Sensibilisation2/>
    <br></br><br></br><br></br>
    <Footer/>
  </div>
  );
}

export default Homepage;



