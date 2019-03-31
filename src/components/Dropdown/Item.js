import React from 'react';

const Item = ({ children }) => {
  return (
    <div className="item">
      <input type="checkbox" />
      <span>{children}</span>
    </div>
  );
};

export default Item;
