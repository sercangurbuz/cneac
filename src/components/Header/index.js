import React, { Component } from 'react';
import './index.scss';
import Menus from "../../components/Menus"
import Button from "../Button"

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="wrapper">
          <Menus />
          <div className="content">
            <h1 className="title">L'ENSEIGNEMENT AGRICOLE PAR CORRESPONDANCE</h1>
            <div className="desc">
              Depuis plus de 20 ans nous preparons aux diplopes publics du
              ministere de I'Agriculture
          </div>
            <Button>Presentation</Button>
            <Button hiddenMd inverse>Inscrivez-vous</Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
