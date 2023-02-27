import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
    return (
        <div className="box">
            <Logo />
            <Navigation />
            <h1>A propos</h1>
            <br />
            Ce site a été développé avec React, il répertorie les pays du monde entier, lorsqu'on survole la drapeau d'un pays nous avons les informations, du nom du pays, de sa capitale, ainsi que du nombre d'habitants. Il y a la possibilité d'augmenter le nombre de drapeau visible avec la barre sur la gauche, de selectionner un continent avec les boutons "radios".
            <br />
            <br />
            A titre d'information, les pays sont triés par ordre décroissant du nombre d'habitants.
            <br />
            <br />
            Pour récupérer les informations des pays j'ai utilisé l'api de REST Countries.
        </div>
    );
};

export default About;
