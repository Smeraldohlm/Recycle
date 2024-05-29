// PageInscription.js
import React, { useState } from 'react';
import './InscriptionPage.css'; 
import Navbar from './Navbar';

function PageInscription() {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [email, setEmail] = useState('');
  const [motDePasse, setMotDePasse] = useState('');
  const [typeOrganisation, setTypeOrganisation] = useState('');
  const [adresse, setAdresse] = useState('');
  const [telephone, setTelephone] = useState('');
  const [conditionsAcceptees, setConditionsAcceptees] = useState(false);

  const handleInscription = () => {
    // Logique pour gérer l'inscription, par exemple envoyer les données au backend
  };

  return (
    <div>
      <Navbar></Navbar>
    <div className="inscription-container">
      <div className="left-section">
        <h2>Pourquoi créer un compte ?</h2>
        <p>
          Un compte RecycleCreate vous permet de participer à nos programmes de recyclage gratuits. Vous pouvez utiliser votre compte pour recycler pour vous-même, votre famille, vos amis, votre entreprise et même votre communauté. Rejoignez les programmes, obtenez des étiquettes d’envoi prépayées et suivez l’envoi de vos déchets à recycler et leur impact via votre compte.
        </p>
      </div>
      <div className="right-section">
        <h1>Inscrivez-vous 
          et recyclez avec RecycleCreate</h1>
        <form onSubmit={handleInscription}>
          <label><strong>Nom</strong></label>
          <input type="text" placeholder="Nom" value={nom} onChange={(e) => setNom(e.target.value)} required />
          <label><strong>Prénom</strong></label>
          <input type="text" placeholder="Prénom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />
          <label><strong>Email</strong></label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label><strong>Password</strong></label>
          <input type="password" placeholder="Mot de passe" value={motDePasse} onChange={(e) => setMotDePasse(e.target.value)} required />
          <label><strong>Type d'organisation</strong></label>
          <select value={typeOrganisation} onChange={(e) => setTypeOrganisation(e.target.value)} required>
            <option value="">Type d'organisation</option>
            <option value="entreprise">Entreprise</option>
            <option value="communaute">Communauté</option>
            <option value="ecole">Ecole</option>
            <option value="universite">Université</option>
            {/* Ajoutez d'autres options si nécessaire */}
          </select>
          <label><strong>Adresse</strong></label>
          <input type="text" placeholder="Adresse" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
          <label><strong>Telephone</strong></label>
          <input type="tel" placeholder="Téléphone" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
          <label>
            <input type="checkbox" checked={conditionsAcceptees} onChange={(e) => setConditionsAcceptees(e.target.checked)} required />
            J'ai lu et j'accepte les conditions d'utilisation. <a href="#" target="_blank">Voir nos conditions d'utilisation et politique de confidentialité dans un nouvel onglet.</a>
          </label>
          <button type="submit">S'inscrire</button>
        </form>
        <p className="connect-link-container">Vous avez déjà un compte ? <a href="#">Se connecter maintenant</a></p>
      </div>
    </div>
    </div>
  );
}

export default PageInscription;
