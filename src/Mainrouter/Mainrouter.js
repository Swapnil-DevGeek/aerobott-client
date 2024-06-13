import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from '../components/Layouts/Layout'
import Home from '../pages/HomePage/Home'
const router = createBrowserRouter(
    createRoutesFromElements(
        <>
        <Route path='/' element={<Layout/>} >
            <Route path='/' element={<Home/>} />
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
