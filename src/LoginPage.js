import React, { useState } from 'react';
import './LoginPage.css'; // Assurez-vous d'importer le fichier CSS pour styler la page
import Navbar from './Navbar';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Logique de connexion
  };

  const handleForgotPassword = () => {
    // Logique pour gérer l'oubli de mot de passe
  };

  return (
    <div>
        <Navbar></Navbar>
    <div className="login-container">
      <div className="left-section">
        <h2>Pourquoi un compte ?</h2>
        <p>
          Un compte RecycleCreate vous permet de participer à nos programmes de recyclage gratuits. Vous pouvez utiliser votre compte pour recycler pour vous-même, votre famille, vos amis, votre entreprise et même votre communauté. Rejoignez les programmes, obtenez des étiquettes d’envoi prépayées et suivez l’envoi de vos déchets à recycler et leur impact via votre compte.
        </p>
      </div>
      <div className="right-section">
        <h1>Se connecter</h1>
        <form onSubmit={handleLogin}>
          <label><strong>Email</strong></label>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          <label><strong>Mot de passe</strong></label>
          <input type="password" placeholder="Mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} required />
          <button type="submit">Se connecter</button>
          <p style={{ textAlign: 'center' }}><a href="#" onClick={handleForgotPassword}>Mot de passe oublié ?</a></p>
          <p style={{ textAlign: 'center' }}>Vous n'avez pas encore de compte ? <a href="/inscription">Inscrivez-vous maintenant</a></p>
        </form>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
