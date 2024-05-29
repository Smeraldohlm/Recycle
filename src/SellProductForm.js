import React, { useState } from 'react';
import './Sell.css';
import Navbar from './Navbar';
function SellProductForm({ onSubmit }) {
    const [productName, setProductName] = useState('');
    const [description, setDescription] = useState('');
    const [location, setLocation] = useState('');
    const [price, setPrice] = useState('');
    const [materials, setMaterials] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            productName,
            description,
            location,
            price,
            materials,
            image
        };
        onSubmit(formData);
    };

    return (
        <div>
            <Navbar></Navbar>
    
        <div className="sell-product-form">
            
            <form onSubmit={handleSubmit}>
                <h2>Vendre un produit sur RecycleCreate</h2>
                <div className="form-group">
                    <label htmlFor="productName"><strong>Nom du produit:</strong></label>
                    <input type="text" id="productName" placeholder="Nom du produit" value={productName} onChange={(e) => setProductName(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description"><strong>Description:</strong></label>
                    <textarea id="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="location"><strong>Localisation:</strong></label>
                    <input type="text" id="location" placeholder="Localisation" value={location} onChange={(e) => setLocation(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="price"><strong>Prix:</strong></label>
                    <input type="number" id="price" placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="materials"><strong>Matériaux utilisés:</strong></label>
                    <input type="text" id="materials" placeholder="Matériaux utilisés" value={materials} onChange={(e) => setMaterials(e.target.value)} required />
                </div>
                <div className="form-group">
                    <label htmlFor="image"><strong>Image:</strong></label>
                    <input type="file" id="image" onChange={(e) => setImage(e.target.files[0])} required/>
                </div>
                <button type="submit"><strong>Vendre</strong></button>
            </form>
        </div>
        </div>
    );
}

export default SellProductForm;


