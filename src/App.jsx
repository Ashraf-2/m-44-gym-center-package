import { useState } from 'react'

import './App.css'
import Nav from './Components/Navbar/Nav'
import PriceOptions from './Components/Price-Options/PriceOptions'
import LineCrt from './Components/Line-Chart/LineCrt'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineCrt></LineCrt>
    
    </>
  )
}

export default App
