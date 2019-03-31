import React from 'react';

const Item = ({ index, tag, desc }) => {
  return (
    <div className={`item image${index}`}>
      <span className="tag">{tag}</span>
      <span className="desc">{desc}</span>
    </div>
  );
};

export default Item;
