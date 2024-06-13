import React from 'react'
import Categories from '../../components/categorySection/Categories'
import Drone from '../../components/droneCards/Drone'
import Battery from '../../components/buyBatteries/Battery'
import Propeller from '../../components/buyPropeller/Propeller'
import Camera from '../../components/buyCameras/Camera'
import Controller from '../../components/buyControllers/Controller'

const Home = () => {
  return (
    <>
        <Categories/>
        <Drone/>
        <Battery/>
        <Propeller/>
        <Camera/>
        <Controller/> 
    </>
  )
}

export default Home
