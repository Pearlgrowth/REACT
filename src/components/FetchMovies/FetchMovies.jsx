import React, { useState, useEffect, useContext } from "react";
import MoviesContext from "../../Context/MoviesContext";
import CartContext from "../../Context/CartContext";
const FetchMovie = () => {
  // const [data, setdata] = useState({
  //   results: [],
  // });
  // const [genres, setgenres] = useState([]);
  // const getData = async () => {
  //   const api =
  //     "https://api.themoviedb.org/3/movie/popular?api_key=d3adc528937c14b4044f9ee3bf46f522";
  //   const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3adc528937c14b4044f9ee3bf46f522`;
  //   const response = await fetch(api);
  //   const results = await response.json();
  //   setdata(results);
  // };

  // const getGenres = async () => {
  //   const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=d3adc528937c14b4044f9ee3bf46f522`;
  //   const response = await fetch(genresUrl);
  //   const results = await response.json();
  //   setgenres(results.genres);
  // };

  // const retrieveGenreName = (genreIds) => {
  //   const genre = genreIds.map((id) => genres.filter((genre) => genre.id === id)[0].name);
  //   return genre;
  // }

  // useEffect(() => {
  //   getGenres()
  //   getData();
  // }, []);

  // console.log(data);
  const { movies } = useContext(MoviesContext);
  const { dispatch } = useContext(CartContext);

  function handleAdd(movie) {
    dispatch({ type: "ADD", payload: movie });
  }

  return movies.map((movie) => {
    console.log(movie);
    return (
      <div key={movie.id}>
        <h1>{movie.title}</h1>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
        <p>{movie.overview}</p>
        {/* <p> {retrieveGenreName(movie.genre_ids).join(', ')}</p> */}
        <button onClick={() => handleAdd(movie)}>ADD TO CART</button>
      </div>
    );
  });
};

export default FetchMovie;
