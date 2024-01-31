import React,{useState,useEffect} from "react";
import MoviesContext from "./MoviesContext";

function MoviesContextProvider({ children }) {
  const [movies, setMovies] = useState([]);
  
  const getData = async () => {
    const api =
      "https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522";
    const response = await fetch(api);
    const jsonObject = await response.json();
    setMovies(jsonObject.results);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <MoviesContext.Provider value={{ movies, setMovies }}>
      {children}
    </MoviesContext.Provider>
  );
}

export default MoviesContextProvider;
