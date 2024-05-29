/// ProductDetailPage.js

import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from './Navbar';
import './ProductDetailPage.css'; // Importer le fichier CSS

function ProductDetailPage({ products }) {
    const { productId } = useParams();
    const product = products.find(product => product.id === parseInt(productId));

    if (!product) {
        return <div>Produit non trouvé</div>;
    }

    return (
        <div>
            <Navbar />
            <div className="product-detail">
                <img src={product.image} alt={product.name} />
                <div className="info">
                    <h2>{product.name}</h2>
                    <p>Prix: {product.prix}</p>
                    <p>Quantité restante: {product.quantity}</p>
                    <p>Description: {product.description}</p>
                    <p>Matériaux utilisés: {product.materiaux}</p>
                    <p>Localisation: {product.localisation}</p>
                    <br></br>
                    <button className="add-to-cart" onClick={()=>{} }>Ajouter au panier</button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;


