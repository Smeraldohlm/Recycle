// ProductGrid.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Products.css';


function ProductCard({ product }) {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.prix}</p>
            
            <p>Quantité restante: {product.quantity}</p>
            <div className="button-group">
                <Link to={`/product/${product.id}`}>En savoir plus</Link>
            </div>
        </div>
    );
}

function ProductGrid2() {
    const products = [
        { 
            id: 1, 
            name: "Etagère", 
            prix: "50DH", 
            quantity: 20, 
            image: "https://th.bing.com/th/id/R.2459172fc35730d42a6e33df292c7bcd?rik=0xGzRnAfz4PIMQ&pid=ImgRaw&r=0", 
            description: "Une étagère robuste et élégante pour votre intérieur.",
            materiaux: "Carton massif",
            localisation: "Fabriqué à Rabat"
        },
        { 
            id: 2, 
            name: "Box à stylo", 
            prix: "20DH", 
            quantity: 15, 
            image: "https://th.bing.com/th/id/R.5dae765fb2f386815c9d31131129b089?rik=FHI6MDv%2bbFoecw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-ZDZoPn5W7UY%2fUtbbxRwrkvI%2fAAAAAAAADkA%2f67-O0XCl1cY%2fs640%2fppbinfin.jpg&ehk=L6%2fa1PyuvUvzqaQc%2fG8BhYwe6eoUliYqvyJ9DOHJ%2fXo%3d&risl=&pid=ImgRaw&r=0", 
            description: "Une boîte pratique pour ranger vos stylos et autres fournitures de bureau.",
            materiaux: "Plastique recyclé",
            localisation: "Fabriqué à Rabat"
        },
        { 
            id: 3, 
            name: "Alimentation Animaux ", 
            prix: "80DH/Kg", 
            quantity: 2, 
            image: "https://th.bing.com/th/id/R.516f920110f97aca5785fc56c8710026?rik=oa0O3m9ySFoR%2fw&pid=ImgRaw&r=0", 
            description: "Alimentation équilibrée pour vos animaux de compagnie.",
            materiaux: "Ingrédients naturels",
            localisation: "Fabriqué à Rabat"
        },
        { 
            id: 4, 
            name: "Point collecte ", 
            prix: "10DH", 
            quantity: 0, 
            image: "https://i.pinimg.com/originals/37/18/18/3718180efc9ee1cd3a73395de08c19d3.jpg",
            description: "Un point de collecte pour le recyclage de divers matériaux.",
            materiaux: "Acier",
            localisation: "Fabriqué à Rabat"
        },
        { 
            id: 5, 
            name: "Panier poubelle ", 
            prix: "20DH", 
            quantity: 0, 
            image: "https://th.bing.com/th/id/R.8f85697e0ad1f984ba5896c58c76845a?rik=KzsrhQtwaK82%2fg&riu=http%3a%2f%2fm1.paperblog.com%2fi%2f238%2f2385668%2fportal-reciclaje-papel-telas-L-6_mDoq.jpeg&ehk=inOlzkdlFIEVNfWYs1UKdGrO99JW0tAaIt1Njoel1HI%3d&risl=&pid=ImgRaw&r=0",
            description: "Un panier poubelle pratique pour la collecte des déchets.",
            materiaux: "Plastique recyclé",
            localisation: "Fabriqué à Rabat"
        },
        { 
            id: 6, 
            name: "Horloge ", 
            prix: "20DH", 
            quantity: 10, 
            image: "https://th.bing.com/th/id/R.39c31ab9127415e84504153e20482bcf?rik=tgXLakYWLb5uqg&riu=http%3a%2f%2f1.bp.blogspot.com%2f-B1FQyUCgQhs%2fUzh80KUfoHI%2fAAAAAAAAEMY%2fZGrl9TCF9ow%2fs1600%2fDSC_0415.jpg&ehk=qkWH3Cd0NNvHNRtgkJwfzeKuIl%2fJ6HGnb1RUvYh2fRA%3d&risl=&pid=ImgRaw&r=0",
            description: "Une horloge à bon prix en utilisant le recyclage.",
            materiaux: "Bois recyclé",
            localisation: "Fabriqué à Casablanca"
        },

    ];

    return (
        <div className='product-container'>
            <div className="product-grid">
                {products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            
        </div>
    );

}

export default ProductGrid2;







