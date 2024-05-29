// CartPage.js

import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

function CartPage({ location }) {
    const cart = (location.state && location.state.cart) || [];


    return (
        <div>
            <Navbar />
            <div className="cart-page">
                <h2>Panier</h2>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>{item.name} - {item.prix}</li>
                    ))}
                </ul>
                <Link to="/">Retour aux produits</Link>
            </div>
        </div>
    );
}

export default CartPage;




