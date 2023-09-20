import { useState } from 'react'

import './App.css'
import Nav from './Components/Navbar/Nav'
import PriceOptions from './Components/Price-Options/PriceOptions'
import LineCrt from './Components/Line-Chart/LineCrt'
import Users from './Components/Users-api/Users'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav></Nav>
      <PriceOptions></PriceOptions>
      <LineCrt></LineCrt>
      <Users></Users>
    
    </>
  )
}

export default App
