import React from 'react';
import './Description .css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function DescriptionProjet() {
    return (
        <div>
            <div className='description'>
                <h1>Découvrez RecycleCreate</h1>
                <p>
                    RecycleCreate est une plateforme en ligne dédiée à la promotion de produits écologiques et recyclés.
                    Notre mission est de sensibiliser et d'encourager les achats responsables en mettant en avant des produits
                    fabriqués à partir de matériaux recyclés, contribuant ainsi à la protection de l'environnement.
                </p>
                <p>
                    Nous croyons en un avenir durable et nous nous engageons à offrir une large gamme de produits de qualité,
                    tout en encourageant la réutilisation et le recyclage. Découvrez notre sélection de produits et rejoignez-nous
                    dans notre démarche pour un monde plus vert !
                </p>
            </div>
            <div className="description-projet">
                <div className="rubrique">
                    <img src="https://th.bing.com/th/id/R.07c717d8f45ad51a3a4333c83700e34d?rik=pVFaZ90U42Y1fA&riu=http%3a%2f%2fwww.bhg.com.au%2fmedia%2f28979%2frecycling.jpg&ehk=ObxgMpAyDZTKeaXtqZpqHq5cis7mSRwMrkdBIsZCXB4%3d&risl=&pid=ImgRaw&r=0" alt="RecycleCreate" />
                    <h3>En savoir plus</h3>
                    <p>RecycleCreate est une plateforme en ligne dédiée à la promotion de produits écologiques et durables. Notre objectif est de sensibiliser et d'encourager les achats responsables en mettant en avant des produits fabriqués à partir de matériaux recyclés. Nous croyons en un avenir durable et nous nous engageons à offrir une large gamme de produits de qualité, tout en contribuant à la préservation de l'environnement.</p>
                    <a href="#">En savoir plus <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                <div className="rubrique">
                    <img src="https://th.bing.com/th/id/R.11a06ec9ac157782f40a5174c06afa45?rik=8kG5P4H%2fQogrlw&pid=ImgRaw&r=0" alt="Impact positif" />
                    <h3>Impact positif</h3>
                    <p>L'objectif principal de RecycleCreate est de réduire l'empreinte écologique en promouvant l'utilisation de produits recyclés et durables. Nous visons à sensibiliser les consommateurs aux avantages du recyclage et à encourager des pratiques d'achat plus responsables. En mettant en avant des produits fabriqués à partir de matériaux recyclés, nous contribuons à la réduction des déchets et à la préservation .</p>
                    <a href="#">En savoir plus <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
                <div className="rubrique">
                    <img src="https://th.bing.com/th/id/R.13220b563d816462aaaf9a035ff61d61?rik=sfksiZ9aixgK9w&pid=ImgRaw&r=0" alt="Notre processus" />
                    <h3>Notre processus</h3>
                    <p>Notre processus débute par une sélection minutieuse de partenaires partageant nos valeurs de durabilité. En collaboration étroite, nous nous assurons que les produits sur notre plateforme répondent aux normes de qualité et de durabilité les plus élevées. Chaque étape, de la conception à la livraison, est alignée sur les principes du développement durable, contribuant ainsi à la préservation de l'environnement..</p>
                    <a href="#">En savoir plus <FontAwesomeIcon icon={faArrowRight} /></a>
                </div>
            </div>
        </div>
    );
}

export default DescriptionProjet;



