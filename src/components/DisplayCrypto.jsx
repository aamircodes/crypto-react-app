import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Coin from './Coin';

function DisplayCrypto() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_KEY}`)
      .then((res) => setCoins(res.data))
      .catch((e) => console.log(e));
  });

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filterCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Find your coin</h1>
      <form>
        <input type='text' placeholder='search...' onChange={handleChange} />
        {filterCoins.map((coin) => {
          return (
            <Coin
              key={coin.id}
              name={coin.name}
              symbol={coin.symbol}
              price={coin.current_price}
              image={coin.image}
              marketcap={coin.market_cap}
            />
          );
        })}
      </form>
    </div>
  );
}

export default DisplayCrypto;
