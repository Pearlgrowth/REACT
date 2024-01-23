import React from 'react'
import CatRetrieval from './CatRetrieval'
import './MainCats.css'
const MainCats = ({catsInfo}) => {
   
  return (
    <div className= 'page'>
        <div className= 'top'>
        <CatRetrieval data = {catsInfo}/>
        </div>
        <div className = 'bottom'>
        </div>
    </div>
  )
}
export default MainCats;