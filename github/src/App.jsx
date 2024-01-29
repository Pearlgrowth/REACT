import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/fetchdata/Fetch.css";
import Fetchdata from "./components/Fetchdata";
import Search from './components/fetchdata/Search'
function App() {
  const [username, setUserName] = useState("");
function onSearch(username){
  setUserName(username)
}

  
  return (
    <>
      <h1>GITHUB SEARCH TOOL</h1>
      <Search onSearch={onSearch}/>
      <Fetchdata username={username} />
    </>
  );
}

export default App;
