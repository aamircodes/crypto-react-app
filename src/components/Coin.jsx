import React from 'react';

function Coin({ name, symbol, price, image, marketcap }) {
  return (
    <div>
      <div>{name} </div>
      <div>{symbol} </div>
      <div>${price} </div>
      <img src={image} alt='coin'></img>
      <div>{marketcap} </div>
    </div>
  );
}

export default Coin;
