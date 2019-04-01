import React from 'react';
import Dropdown from '../Dropdown';
import './index.scss';

const Trouver = () => {
  return (
    <div className="trouver">
      <span className="title">TROUVER MA FORMATION</span>
      <Dropdown
        text="Service a la personne et aux territorires"
      >
        <Dropdown.Item>Service a la personne et aux territorires</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
      </Dropdown>
      <Dropdown text="Choix multiples" >
        <Dropdown.Item>Choix multiples</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item>
        <Dropdown.Item>Lorem ipsum dolor sit amet</Dropdown.Item></Dropdown>
    </div>
  );
};

export default Trouver;
