import React from 'react'

import droneActive from "../../assets/subHeaderImages/DroneActive.png";
import propellers from "../../assets/subHeaderImages/propellers.png";
import camera from "../../assets/subHeaderImages/camera.png";
import batteries from "../../assets/subHeaderImages/batteries.png";
import carbontube from "../../assets/subHeaderImages/carbontube.png";
import controller from "../../assets/subHeaderImages/controller.png";

const SubHeader = () => {

  const subHeadingData = [
    {name : "Drone" , image : droneActive},
    {name : "Propellers" , image : propellers},
    {name : "Batteries", image : batteries},
    {name : "Carbon Tube", image : carbontube},
    {name : "Camera" , image : camera },
    {name : "Controller", image: controller}
  ]

  return (
    <div className='w-[100%] shadow-md border-t'>
      <div className='max-w-screen-xl mx-auto flex justify-center items-center'>
      <div className='grid grid-cols-2 gap-x-28 gap-y-4 lg:gap-x-12 lg:grid-cols-6 p-8'>
        {subHeadingData.map((item,index)=>(
          <div key={index} className='flex items-center gap-2'>
            <img src={item.image} alt="" />
            <div className={`${index ===0 ?'text-[#216FB9]' : 'text-[#2C2C2C]' } `}>{item.name}</div>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}

export default SubHeader
