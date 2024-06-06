import React from 'react'
import Navbar from './components/navbar/Navbar'
import Categories from './components/categorySection/Categories'
import Drone from './components/droneCards/Drone'
import Propeller from './components/buyPropeller/Propeller'

const App = () => {
  return (
    <>  
      <Navbar/>
      <Categories/>
      <Drone/>
      <Propeller/>
    </>
  )
}

export default App
