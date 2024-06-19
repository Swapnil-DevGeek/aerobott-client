import React, {useState} from 'react'
import FAQ from "./FAQ";
import SubHeader from '../../components/SubHeader/SubHeader'
import HeaderLink from "../../components/headerLink/HeaderLink"
import AboutDrone from "../../components/aboutDrone/AboutDrone"
import styles from './CostCard.module.css';

//logos
import icon1 from "../../assets/aboutDrones/productSpecifications/icon1.png"
import icon2 from "../../assets/aboutDrones/productSpecifications/icon2.png"
import icon3 from "../../assets/aboutDrones/productSpecifications/icon3.png"
import icon4 from "../../assets/aboutDrones/productSpecifications/icon4.png"
import icon5 from "../../assets/aboutDrones/productSpecifications/icon5.png"
import icon6 from "../../assets/aboutDrones/productSpecifications/icon6.png"
import icon7 from "../../assets/aboutDrones/productSpecifications/icon7.png"
import icon8 from "../../assets/aboutDrones/productSpecifications/icon8.png"
import icon9 from "../../assets/aboutDrones/productSpecifications/icon9.png"
import icon10 from "../../assets/aboutDrones/productSpecifications/icon10.png"
import icon11 from "../../assets/aboutDrones/productSpecifications/icon11.png"
import icon12 from "../../assets/aboutDrones/productSpecifications/icon12.png"
import icon13 from "../../assets/aboutDrones/productSpecifications/icon13.png"
import icon14 from "../../assets/aboutDrones/productSpecifications/icon14.png"

//card images
import toolkit from "../../assets/aboutDrones/toolkit.png";
import  remote from "../../assets/aboutDrones/remote.png";

const SpecsCard = ({ head,subhead,logo }) => {
  return (
    <div className={styles.card}>
      <div className={styles.iconCircle}>
        <img src={logo} alt="" />
      </div>
      <div className={styles.content}>
        <div className={styles.cost}>{head}</div>
        <div className={styles.label}>{subhead}</div>
      </div>
    </div>
  );
}

const Heading = ({text}) =>{
  return (
    <div className='max-w-screen-xl text-[#216FB9] text-2xl font-semibold mx-auto flex justify-center items-center bg-[#80CAFF12] py-4 capitalize'>
      {text}
    </div>
  )
};

const KitCard = ({image,head,subtext})=>{
    return (
        <div className="relative rounded-2xl overflow-hidden shadow-md w-80 h-80">
            <img
                src={image}
                alt="Tool Kit"
                className="w-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/80 py-2 px-4 text-center">
                <h2 className="text-lg font-bold text-white">{head}</h2>
                <span className="text-sm text-gray-400">{subtext}</span>
            </div>
        </div>
    )
};

const DroneDetail = () => {
    const specsCardData = [
        {head: "₹ 4,56,892", subhead: "Cost", logo: icon1},
        {head: "Medium", subhead: "Drone Category", logo: icon2},
        {head: "29.84 kg", subhead: "Max. take-off weight", logo: icon3},
        {head: "Battery", subhead: "Power Source", logo: icon4},
        {head: "6 acres / hour", subhead: "Area spraying rate", logo: icon5},
        {head: "11 Litres", subhead: "Spray Tank", logo: icon6},
        {head: "22 Mins", subhead: "Flight Time", logo: icon7},
        {head: "4", subhead: "No. of nozzles", logo: icon8 },
        { head: "N/A", subhead: "Spray width", logo: icon9 },
        { head: "5L / min", subhead: "Flight Spray volume", logo: icon10 },
        { head: "N/A", subhead: "GPS accuracy", logo: icon11 },
        { head: "N/A", subhead: "On board cameras", logo: icon12 },
        { head: "Yes", subhead: "Terrain Following", logo: icon13 },
        { head: "Agriculture", subhead: "Purpose", logo: icon14 }
  ];

    const kitCardData = [
        {image : toolkit,head : "Tool Kit",subhead: "Maintenance Kit"},
        {image:remote,head:"Drone Buddy",subhead: "Remote Controller"},
        {image:toolkit,head: 'Drone Box',subhead:"Easy To Carry"}
    ];

    const [faqs,setFaqs] = useState([
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.", open : true},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
        {question : "Where Can I Watch ?", answer:"Nibh quisque suscipit fermentum netus nulla cras porttitor euismod nulla. Orci, dictumst nec aliquet id ullamcorper venenatis. Fermentum sulla craspor ttitore  ismod nulla.",open : false},
    ]);

    const toggleFAQ = index => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) {
                    faq.open = !faq.open;
                } else {
                    faq.open = false;
                }

                return faq;
            })
        );
    };


    return (
      <>
          <SubHeader/>
          <HeaderLink/>
          <AboutDrone/>
          <Heading text={"product specification"}/>
          <div
              className='max-w-screen-lg flex mx-auto text-[#6E7898]  justify-center items-center py-2 text-center my-8'>AG
              365 stands out in the industry with its versatile multi-utility platform, offering users remarkable
              flexibility and adaptability in their operations.
          </div>

          <div className='max-w-screen-xl mx-auto mb-20 flex flex-wrap justify-center gap-16 items-center'>
              {specsCardData.map((spec, index) => (
                  <SpecsCard key={index} head={spec.head} subhead={spec.subhead} logo={spec.logo}/>
              ))}
          </div>

          {/* drone video */}
          <div className="w-[100%] h-[38rem] mb-16 bg-black flex justify-center items-end py-16">
              <div
                  className='text-white bottom-12 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 w-[78vw]'>
                  <div>
                      <div className='capitalize text-lg lg:text-2xl lg:font-semibold'>Unbox the benefits of</div>
                      <div className='lg:text-6xl text-2xl font-bold uppercase'>Agricopter A365</div>
                  </div>
                  <button
                      className="lg:px-4 lg:py-2 px-3 py-1 rounded-3xl bg-white w-32 flex justify-center items-center gap-1">
                      <div className='text-[#216F9B]'>Buy Now</div>
                      <svg className="w-6 h-6 pt-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="12"
                           height="12" fill="none" viewBox="0 0 24 24">
                          <path stroke="#2169FB" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                d="M19 12H5m14 0-4 4m4-4-4-4"/>
                      </svg>
                  </button>
              </div>
          </div>

          <Heading text={"Things You Will Get With This Drone"}/>

          {/* cards desktop view */}
          <div className="max-w-screen-xl mx-auto flex justify-between items-center my-16">
              {kitCardData.map((item,index)=>(
                  <KitCard key={index} head={item.head} image={item.image} subtext={item.subhead}/>
              ))}
          </div>

          <Heading text={"FAQ'S"}/>

          {/* FAQ's  */}
          <div className="max-w-screen-xl mx-auto flex justify-center items-center mt-4">
              <div className="faqs">
                  {faqs.map((faq, index) => (
                      <FAQ faq={faq} index={index} key={index} toggleFAQ={toggleFAQ}/>
                  ))}
              </div>
          </div>

      </>
    )
}

export default DroneDetail
