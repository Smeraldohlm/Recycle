import React, { useState } from 'react';
import './Sell.css';
import background1 from './vente.JPEG';
import Navbar from './Navbar';

function SellProductPage() {
    const [showForm, setShowForm] = useState(false);

    const handleSubmit = (formData) => {
        // Envoyer les données du formulaire à votre backend ou effectuer toute autre action nécessaire
        console.log(formData);
        // Réinitialiser le formulaire ou afficher un message de confirmation, etc.
    };

    return (
        <div>
            <Navbar></Navbar>
            <div className="sell-image">
                <img src={background1} alt="sell image" />
                <div className="content">
                    <h1>Vendez vos produits recyclés avec RecycleCreate</h1><br></br>
                    <a href="/venteform" className="cta-button">Commencer à vendre</a>
                </div>
            </div>
        </div>
    );
}

export default SellProductPage;



