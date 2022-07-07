import React, { useState, useEffect } from "react";
import PokemonList from "./PokemonList";
import axios from "axios";
import Pagination from "./Pagination";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState( "https://pokeapi.co/api/v2/pokemon");
  const [prevPageUrl, setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading,setLoading]= useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get(currentPageUrl).then(res => {
      setLoading(false);
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
      getPokemon(res.data.results);
    })
     const getPokemon = async (res) => {
       res.map(async (p) => {
         const result = await axios.get(p.url);
         setPokemon((state) => {
           state = [...state, result.data];
           return state;
         });
       });
     };
    
  }, [currentPageUrl])

  function goToNextPage(){
     setCurrentPageUrl(nextPageUrl)
  }
  function goToPreviousPage() {
    setCurrentPageUrl(prevPageUrl)
  }

  if (loading) return "Loading..."
  
 

    return (
    <>
    <PokemonList pokemon={pokemon} />
    <Pagination
          goToPreviousPage={prevPageUrl ? goToPreviousPage : null}
          goToNextPage={nextPageUrl ? goToNextPage : null} />      

    </>
  );
}

export default App;
