import React from 'react';

const Pokeinfo = () => {
    return (
      <>
        <h1>Bulbasaur</h1>
        <img
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png"
          alt=""
        />
        <div className="abilities">
          <div className="group">
            <h2>attack</h2>
            <h2>defend</h2>
          </div>
        </div>
        <div className="base-stats">
            <h3>HP:45</h3>
            <h3>Attack:49</h3>
            <h3>Defense:45</h3>
        </div>
        
      </>
    );
}
export default Pokeinfo