// App.js

import React from 'react';
import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router-dom';
import Homepage from './Home';
import InscriptionPage from './InscriptionPage';
import LoginPage from './LoginPage';
import SellProductForm from './SellProductForm';
import SellProductPage from './SellProductPage';
import ProductsPage from './Products';
import ProductDetailPage from './ProductDetailPage'; 
import CartPage from './CartPage';
import Sensibilisation from './Sensibilisation';

function App() {
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
];

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/inscription" element={<InscriptionPage />} /> 
          <Route path="/connexion" element={<LoginPage />} /> 
          <Route path="/vente" element={<SellProductPage />} /> 
          <Route path="/venteform" element={<SellProductForm />} /> 
          <Route path="/produits" element={<ProductsPage />} /> 
          <Route path="/product/:productId" element={<ProductDetailPage products={products} />} />

          <Route path="/cart" element={<CartPage />} /> 
          <Route path="/Sensibilisation" element={<Sensibilisation />} /> 
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;



