import React from 'react';
import Item from './Item';

function Container({data}) {
  return (
    <div className="questions-container">
      {data.map((el, i) => {
        return <Item key={i} data={el} />;
      })}
    </div>
  );
}

export default Container
