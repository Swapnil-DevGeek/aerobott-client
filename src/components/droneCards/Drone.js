import React, { useState } from "react";
// icons
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

import certify from "../../assets/certify.png";
import upRight from "../../assets/arrow-up-right.png";
import right from "../../assets/arrow-right.png";

import agriDrone from "../../assets/droneImages/agridrone.png";
import syena from "../../assets/droneImages/syena.png";
import agricopter from "../../assets/droneImages/agricopter.png";

// logos
import agridroneLogo from "../../assets/droneLogo/agridroneLogo.png";
import syenaLogo from "../../assets/droneLogo/syenaLogo.png";
import agricopterLogo from "../../assets/droneLogo/agricopterLogo.png";

import styles from "./Drone.module.css"; // Import the CSS module

const droneData = [
  { image: agriDrone, name: "Kisan Agri Drone V.1", logo: agridroneLogo },
  { image: syena, name: "SYENA- H10", logo: syenaLogo },
  { image: agricopter, name: "Agricopter AG356", logo: agricopterLogo },
];

const Card = ({ image, name, logo }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.cardImage} />
    <div className={styles.cardContent}>
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <div className={`${styles.cardBadge} ${styles.bgPrimary}`}>
        <img src={certify} alt="" />
        <div>DGCA Certified</div>
      </div>
    </div>
    <div>
      <h4 className={styles.cardSubtitle}>Garuda Aerospace</h4>
    </div>
    <div>
      <h2 className={styles.cardTitle}>{name}</h2>
    </div>
    <div>
      <h4 className={styles.cardSubtitle}>Made In India</h4>
    </div>
    <div className={`${styles.buttonContainer} lg:hidden lg:group-hover:flex`}>
      <button className={styles.button}>
        <div>View Details</div>
        <div><img src={upRight} alt="" /></div>
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
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h2 className={styles.title}>
            Buy
            <span className={styles.highlight}> DGCA</span>{" "}
            Certified Drones
          </h2>
        </div>
        <div className={styles.cardsContainer}>
          {/* desktop view */}
          <div className={styles.desktopView}>
            {droneData.map((card, index) => (
              <Card key={index} image={card.image} name={card.name} logo={card.logo} />
            ))}
          </div>
          {/* Mobile view with carousel */}
          <div className={styles.mobileView}>
            <div>
              <button
                onClick={prevCard}
                className={styles.carouselButton}
              >
                <ArrowBackIosNewOutlinedIcon className={styles.iconPrimary} />
              </button>
            </div>
            <div className={styles.mobileCardContainer}>
              <Card
                image={droneData[currentIndex].image}
                name={droneData[currentIndex].name}
                logo={droneData[currentIndex].logo}
              />
            </div>
            <button
              onClick={nextCard}
              className={styles.carouselButton}
            >
              <ArrowForwardIosOutlinedIcon className={styles.iconPrimary} />
            </button>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.viewAllButton}>
            <div>View All</div>
            <img src={right} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Drone;
