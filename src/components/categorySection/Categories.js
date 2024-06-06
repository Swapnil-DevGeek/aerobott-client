import React from 'react';

import drone from "../../assets/categories/drone.png";
import batteries from "../../assets/categories/batteries.png";
import propellers from "../../assets/categories/propellers.png";
import carbontube from "../../assets/categories/carbontube.png";
import camera from "../../assets/categories/camera.png";
import controller from "../../assets/categories/controller.png";

import styles from "./Categories.module.css"; // Import the CSS module

const cardData = [
  { image: drone, name: "Drone" },
  { image: batteries, name: "Batteries" },
  { image: propellers, name: "Propellers" },
  { image: carbontube, name: "Carbon Tube" },
  { image: camera, name: "Camera" },
  { image: controller, name: "Controller" },
];

const Card = ({ image, name }) => (
  <div className={styles.card}>
    <img src={image} alt={name} className={styles.cardImage} />
    <div>
      <h3 className={styles.cardName}>{name}</h3>
    </div>
  </div>
);

const Categories = () => {
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        {/* heading */}
        <div>
          <h1 className={styles.heading}>
            Shop By <span className={styles.highlight}>Category</span>
          </h1>
        </div>
        {/* categories */}
        <div className={styles.cardsContainer}>
          {cardData.map((card, index) => (
            <Card key={index} image={card.image} name={card.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
