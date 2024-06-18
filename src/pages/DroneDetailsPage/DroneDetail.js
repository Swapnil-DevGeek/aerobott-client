import React from 'react'
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
const DroneDetail = () => {
  const specsCardData = [
    { head: "₹ 4,56,892", subhead: "Cost", logo: icon1 },
    { head: "Medium", subhead: "Drone Category", logo: icon2 },
    { head: "29.84 kg", subhead: "Max. take-off weight", logo: icon3 },
    { head: "Battery", subhead: "Power Source", logo: icon4 },
    { head: "6 acres / hour", subhead: "Area spraying rate", logo: icon5 },
    { head: "11 Litres", subhead: "Spray Tank", logo: icon6 },
    { head: "22 Mins", subhead: "Flight Time", logo: icon7 },
    { head: "4", subhead: "No. of nozzles", logo: icon8 },
    { head: "N/A", subhead: "Spray width", logo: icon9 },
    { head: "5L / min", subhead: "Flight Spray volume", logo: icon10 },
    { head: "N/A", subhead: "GPS accuracy", logo: icon11 },
    { head: "N/A", subhead: "On board cameras", logo: icon12 },
    { head: "Yes", subhead: "Terrain Following", logo: icon13 },
    { head: "Agriculture", subhead: "Purpose", logo: icon14 }
  ];
  return (
    <>
      <SubHeader/>
      <HeaderLink/>
      <AboutDrone/>
      <div className='max-w-screen-xl text-[#216FB9] text-2xl font-semibold mx-auto flex justify-center items-center bg-[#80CAFF12] py-4'>
        Product Specification
      </div>
      <div className='max-w-screen-lg flex mx-auto text-[#6E7898]  justify-center items-center py-2 text-center my-8'>AG 365 stands out in the industry with its versatile multi-utility platform, offering users remarkable flexibility and adaptability in their operations.</div>

      <div className='max-w-screen-xl mx-auto flex flex-wrap justify-center gap-16 items-center'>
        {specsCardData.map((spec, index) => (
          <SpecsCard key={index} head={spec.head} subhead={spec.subhead} logo={spec.logo} />
        ))}
      </div>

    </>
  )
}

export default DroneDetail
