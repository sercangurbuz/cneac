import React from 'react';
import "./index.scss";
import img1 from "../../assets/filiere1.jpg"
import img2 from "../../assets/filiere2.jpg"

const Sectours = () => {
    return (
        <div className="secteurs">
            <h2>LES SECTEURS</h2>
            <div className="images">
                <div className="image">
                    <img src={img1} alt=""></img>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="image">
                    <img src={img2} alt=""></img>
                    <span>Sed do eiusmod tempor </span>
                </div>
                <div className="image">
                    <img src={img1} alt=""></img>
                    <span>Lorem ipsum dolor sit amet</span>
                </div>
                <div className="image">
                    <img src={img2} alt=""></img>
                    <span>Sed do eiusmod tempor </span>
                </div>
            </div>
            <span className="button">
                Voir tous les secteurs
            </span>
        </div>
    );
}

export default Sectours;