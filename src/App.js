import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "./Pagination";
import Main from "./Components/Main";
import './Components/style.css'

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPageUrl, setNextPageUrl] = useState( "https://pokeapi.co/api/v2/pokemon");
  const [prevPageUrl, setPrevPageUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [loading,setLoading]= useState(true);

   const pokeFun=async()=>{
        setLoading(true)
        const res=await axios.get(currentPageUrl);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
     const getPokemon = async (res) => {
       res.map(async (pokes) => {
         const result = await axios.get(pokes.url);
         setPokemon(state => {
           state = [...state, result.data];
           return state;
         });
       });
     };
    useEffect(() => {
      pokeFun();
    }, [currentPageUrl]);
  
  function goToNextPage(){
     setCurrentPageUrl(nextPageUrl)
  }
  function goToPreviousPage() {
    setCurrentPageUrl(prevPageUrl)
  }  
 
    return (
    <>
    <Main/>
    <Pagination
          goToPreviousPage={prevPageUrl ? goToPreviousPage : null}
          goToNextPage={nextPageUrl ? goToNextPage : null} />      

    </>
  );
}

export default App;
