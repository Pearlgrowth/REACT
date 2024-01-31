import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FetchMovie from "./components/FetchMovies/FetchMovies";
import NavBar from "./components/NavBar/NavBar.jsx";
import MoviesContextProvider from "./Context/MoviesContextProvider.jsx";
import CartContextProvider from "./Context/CartContextProvider.jsx";
function App() {
  return (
    <>
      <CartContextProvider>
        <NavBar />
        <MoviesContextProvider>
          <FetchMovie />
        </MoviesContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
