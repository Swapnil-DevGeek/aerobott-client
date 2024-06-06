import React,{useState} from 'react'
//icons
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import propel1 from "../../assets/propellorImages/propel1.png";
import propel2 from "../../assets/propellorImages/propel2.png";
import propel3 from "../../assets/propellorImages/propel3.png";
import right from "../../assets/arrow-right.png"

const cardData = [
    {image : propel1,name : "Hobbywing Propeller 3090: 30 inch - Pair (CW+CCW)", curPrice : 2000, prevPrice : 3000},
    {image : propel2,name : "Hobbywing Propeller 2388: 23 inch - Pair (CW+CCW)", curPrice : 2000, prevPrice : 3000},
    {image : propel3,name : "Vector Technics 2308 Foldable Propeller Set", curPrice : 2000, prevPrice : 3000}
]

const Card = ({image,name,curPrice,prevPrice}) => {
    return (
        <div className='bg-white border rounded-lg transform transition-transform hover:shadow-lg hover:shadow-[#216FB933] group p-4 shadow-[#216FB933] shadow-lg lg:shadow-none'>
            
            <div className='bg-[#216FB933] px-4 py-4 rounded-lg'>
                <img
                src={image}
                alt={name}
                className="w-[280px] h-[220px] object-cover rounded-t-lg"
                />
            </div>

            <h3 className='my-4'>{name}</h3>

            <div className='flex justify-between items-center '>
                <div>
                    <span className='text-[#216FB9] font-bold text-xl'>₹{curPrice}</span> <span className='text-[#00000080] line-through'> {prevPrice}</span>
                </div>
                <div>
                    <button className='px-4 py-2 bg-[#216FB9] rounded-3xl text-white'>Buy Now</button>
                </div>
            </div>

        </div>
    )
}

const Propeller = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length
    );
  };



  return (
    <div className='max-w-screen-xl mx-auto flex justify-center items-center mb-12'>
        <div className='flex flex-col justify-center items-center gap-4 w-full'> 
            <div>
                <h2 className="text-3xl font-semibold">Buy Drone <span className="font-extrabold text-[#216FB9]">Propellers</span></h2>
            </div>

            <div className="w-full my-4">
                <div className="hidden lg:flex justify-between items-center">
                    {cardData.map((card,index)=>(
                        <Card key={index} name={card.name} image={card.image} curPrice={card.curPrice} prevPrice={card.prevPrice} />
                    ))}
                </div>
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
                image={ cardData[currentIndex].image}
                name={cardData[currentIndex].name}
                prevPrice={cardData[currentIndex].prevPrice}
                curPrice={cardData[currentIndex].curPrice}
              />
            </div>
            <button
                onClick={nextCard}
                className="p-2 "
              >
                <ArrowForwardIosOutlinedIcon  className="text-[#216FB9]" />
            </button>
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
  )
}

export default Propeller
