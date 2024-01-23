import './App.css'
import SearchBox from './components/SearchBox'
import MainCats from './components/MainCats';
import {cat1, cat2, cat3, cat4} from './assets'
import { useState } from 'react';
const  App = ()=>{
  const catsInfo = [
    {
        "id": "1",
        "country": "Kenya",
        "catImage": cat1,
        "description": "Beautiful Kenyan cat"
    },
    {
        "id": "2",
        "country": "Tanzania",
        "catImage": cat2,
        "description": "Interesting Tanzanian cat"
    },
    {
        "id": "3",
        "country": "Uganda",
        "catImage": cat3,
        "description": "Beautiful Ugandan cat"
    },
    {
        "id": "4",
        "country": "Rwanda",
        "catImage": cat4,
        "description": "Beautiful Rwandan cat"
    }
]
const [filteredCats, setFilteredCats] = useState (catsInfo)
function filterCatsByCountry(country){
  let filtered = catsInfo.filter((item)=> item.country === country )
  setFilteredCats(filtered);
}
  return (
    <>
    <div>
    <SearchBox onFilter = {filterCatsByCountry}/>
    <MainCats catsInfo =  {filteredCats}/> 
    
    </div>
     
    </>
  )
}

export default App
