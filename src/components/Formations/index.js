import React from 'react';
import Item from './item';
import './index.scss';


const data = [
  {  
    tag: 'bac pro',
    desc: 'Technicien Consil Vente de Produits de Jardin'
  },
  {   
    tag: 'bac techno',
    desc: 'STAV* Transformation Alimentaire'
  },
  {   
    tag: 'btsa',
    desc: 'Development Animation des Territories Ruraux'
  }
];

const Formations = () => {
  return (
    <div className="formation">
      {data.map((item, i) => (
        <Item key={i} {...item} index={i+1} />
      ))}
    </div>
  );
};

export default Formations;
