// ProductsPage.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import Navbar from './Navbar';
import ProductGrid from './ProductGrid';
import Footer from './Footer';

    
function ProductCard({ product, onAddToCart }) {
    
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart([...cart, product]);
    };

    return (
        
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.prix}</p>
            
            <p>Quantité restante: {product.quantity}</p>
            <div className="button-group">
                <button className="add-to-cart" onClick={() => addToCart(product)}>Ajouter au panier</button>
                <br></br>
                <span className="spacer"></span>
                <Link to={`/product/${product.id}`}>En savoir plus</Link>
            </div>
            
        </div>
       
    );
}

function ProductsPage() {
    return (
        <div>
            <Navbar></Navbar>
            <div className="products-page">
                <h2>Nos produits RecycleCreate</h2>
                <ProductGrid />
                <Footer/>
            </div>
        </div>
    );
}

export default ProductsPage;




