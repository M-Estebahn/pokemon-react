import React from "react";

export default function PokemonList({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
          <div key={p.name}>
              <h1>{p.name}</h1>
              <p>#{p.id}</p>
              <h2>{p.ability.name}</h2>
          </div>
          
      ))}
    </div>
  )
}
