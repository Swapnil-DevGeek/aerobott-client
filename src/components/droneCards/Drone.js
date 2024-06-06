import React, { useState } from "react";
//icons
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import certify from "../../assets/certify.png"
import upRight from "../../assets/arrow-up-right.png";
import right from "../../assets/arrow-right.png";

import agriDrone from "../../assets/droneImages/agridrone.png";
import syena from "../../assets/droneImages/syena.png";
import agricopter from "../../assets/droneImages/agricopter.png";

// logos
import agridroneLogo from "../../assets/droneLogo/agridroneLogo.png";
import syenaLogo from "../../assets/droneLogo/syenaLogo.png";
import agricopterLogo from "../../assets/droneLogo/agricopterLogo.png";

const droneData = [
  { image: agriDrone, name: "Kisan Agri Drone V.1" ,logo : agridroneLogo},
  { image: syena, name: "SYENA- H10", logo : syenaLogo },
  { image: agricopter, name: "Agricopter AG356" , logo: agricopterLogo  },
];


const Card = ({ image, name, logo }) => (
    <div className="bg-white border rounded-lg transform transition-transform hover:shadow-lg hover:shadow-[#216FB933] pb-4 group  shadow-[#216FB933] shadow-lg lg:shadow-none">
      <img
          src={image}
          alt={name}
          className="w-[340px] h-[280px] object-cover rounded-t-lg"
      />
  
      <div className="flex justify-between items-center px-4 my-3">
          <div>
              <img src={logo} alt="Logo" />
          </div>
          <div className="flex justify-center items-center gap-2 px-2 py-1 bg-[#216FB9] rounded-3xl text-white">
              <img src={certify} alt="" />
              <div>DGCA Certified</div>
          </div>
      </div>
  
      <div>
          <h4 className="text-[#00000080] px-4 font-thin">Garuda Aerospace</h4>
      </div>
  
      <div>
          <h2 className="text-2xl font-bold text-[#216FB9] px-4">{name}</h2>
      </div>
  
      <div>
          <h4 className="text-[#00000080] px-4 font-thin">Made In India</h4>
      </div>
      
      <div className="flex justify-center items-center mt-6 mb-2 lg:hidden lg:group-hover:flex">
          <button className="text-white bg-[#216FB9] rounded-3xl px-3 py-2">
              <div className="flex justify-center items-center">
                  <div>View Details</div> 
                  <div><img src={upRight} alt="" /> </div>
              </div>
          </button>
      </div>
    </div>
  );
  


const Drone = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % droneData.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + droneData.length) % droneData.length
    );
  };

  return (
    <div className="max-w-screen-xl mx-auto flex justify-center items-center mb-12">
      <div className="flex flex-col justify-center items-center gap-4 w-full">
        <div>
          <h2 className="text-3xl font-semibold">
            Buy
            <span className="font-extrabold text-[#216FB9]"> DGCA</span>{" "}
            Certified Drones
          </h2>
        </div>

        <div className="w-full my-4">

          {/* desktop view */}
          <div className="hidden lg:flex justify-between gap-1 items-center">
            {droneData.map((card, index) => (
              <Card key={index} image={card.image} name={card.name} logo={card.logo}/>
            ))}
          </div>

          {/* Mobile view with carousel */}
          <div className="lg:hidden flex justify-center items-center">
            <div>
            <button
                onClick={prevCard}
                className="p-2 " 
              >
                <ArrowBackIosNewOutlinedIcon className="text-[#216FB9]"/>
            </button>
            </div>
            <div className="flex justify-center items-center">
              <Card
                image={droneData[currentIndex].image}
                name={droneData[currentIndex].name}
              />
            </div>
            <button
                onClick={nextCard}
                className="p-2 "
              >
                <ArrowForwardIosOutlinedIcon  className="text-[#216FB9]" />
            </button>
          </div>

        </div>

        <div className="mt-8">
            <button className="border-[#216FB9] border-2 rounded-3xl px-4 py-2 text-[#216FB9]">
                <div className="flex justify-center items-center gap-2">
                    <div>View All</div>
                    <img src={right} alt="" />
                </div>
            </button>
        </div>

      </div>
    </div>
  );
};

export default Drone;
