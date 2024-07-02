import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import Home from '../pages/HomePage/Home'
import DroneDetail from '../pages/DroneDetailsPage/DroneDetail'
import BatteryDetails from "../pages/BatteryDetails/BatteryDetails";
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Layout/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/drone-details' element={<DroneDetail/>} />
            <Route path='/battery-details' element={<BatteryDetails/>}/>
        </Route>
        </>
    )
)

const Mainrouter = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Mainrouter
