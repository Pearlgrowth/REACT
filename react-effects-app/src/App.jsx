// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {useState} from 'react'
import FetchData from './components/fetchUserData/FetchData'
import './components/fetchUserData/FetchData.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <FetchData/>
    </>
  )
}

export default App
