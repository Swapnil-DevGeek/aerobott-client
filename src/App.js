import React from 'react'
import Navbar from './components/navbar/Navbar'
import Categories from './components/categorySection/Categories'
import Drone from './components/droneCards/Drone'
import Propeller from './components/buyPropeller/Propeller'
import Controller from './components/buyControllers/Controller'
import Camera from './components/buyCameras/Camera'
import Battery from './components/buyBatteries/Battery'

const App = () => {
  return (
    <>  
      <Navbar/>
      <Categories/>
      <Drone/>
      <Battery/>
      <Propeller/>
      <Camera/>
      <Controller/>
    </>
  )
}

export default App
