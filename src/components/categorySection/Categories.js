import React from 'react'

import drone from "../../assets/categories/drone.png";
import batteries from "../../assets/categories/batteries.png";
import propellers from "../../assets/categories/propellers.png";
import carbontube from "../../assets/categories/carbontube.png";
import camera from "../../assets/categories/camera.png";
import controller from "../../assets/categories/controller.png";

const cardData = [
    {image : drone, name : "Drone"},
    {image : batteries, name : "Batteries"},
    {image : propellers, name : "Propellers"},
    {image :carbontube, name : "Carbon Tube"},
    {image :camera, name : "Camera"},
    {image :controller, name : "Controller"},
]

const Card = ({ image, name }) => (
    <div className="bg-white rounded-lg p-4 flex justify-center items-center flex-col 
        transform transition-transform hover:scale-105 hover:shadow-lg hover:shadow-[#216FB933]
    ">
      <img src={image} alt={name} className=" h-10 object-cover rounded-t-lg" />
      <div>
      <h3 className="mt-4 text-center text-[#216FB9]">{name}</h3>
      </div>
    </div>
  );

const Categories = () => {
  return (
    <div className='max-w-screen-xl flex justify-center items-center mx-4 lg:mx-auto md:mx-8 my-12 p-8 rounded-xl bg-[#80caff1c]'>
      <div className='flex justify-center flex-col items-center gap-8 '>
        {/* heading */}
        <div>
            <h1 className='text-3xl'>Shop By <span className='font-extrabold  text-[#216FB9]'> Category </span> </h1>
        </div>
        {/* categories */}
        <div className='grid gap-4 gap-x-12 grid-cols-2 md:grid-cols-3 lg:grid-cols-6 md:gap-x-14 lg:gap-14'>
            {cardData.map((card,index)=>(
                <Card key={index} image={card.image} name={card.name} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default Categories
