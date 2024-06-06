import React, { useState } from 'react';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';
import propel1 from "../../assets/propellorImages/propel1.png";
import propel2 from "../../assets/propellorImages/propel2.png";
import propel3 from "../../assets/propellorImages/propel3.png";
import right from "../../assets/arrow-right.png";
import styles from './Propeller.module.css';

const cardData = [
  { image: propel1, name: "Hobbywing Propeller 3090: 30 inch - Pair (CW+CCW)", curPrice: 2000, prevPrice: 3000 },
  { image: propel2, name: "Hobbywing Propeller 2388: 23 inch - Pair (CW+CCW)", curPrice: 2000, prevPrice: 3000 },
  { image: propel3, name: "Vector Technics 2308 Foldable Propeller Set", curPrice: 2000, prevPrice: 3000 }
];

const Card = ({ image, name, curPrice, prevPrice }) => (
  <div className={styles.card}>
    <div className={styles.cardImageContainer}>
      <img src={image} alt={name} className={styles.cardImage} />
    </div>
    <h3 className={styles.cardTitle}>{name}</h3>
    <div className={styles.cardPriceContainer}>
      <div>
        <span className={styles.currentPrice}>₹{curPrice}</span>
        <span className={styles.previousPrice}>{prevPrice}</span>
      </div>
      <div>
        <button className={styles.buyButton}>Buy Now</button>
      </div>
    </div>
  </div>
);

const Propeller = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % cardData.length);
  const prevCard = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + cardData.length) % cardData.length);

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h2 className={styles.title}>Buy Drone <span className={styles.titleHighlight}>Propellers</span></h2>
        </div>
        <div className={styles.cardsContainer}>
          {cardData.map((card, index) => (
            <Card key={index} name={card.name} image={card.image} curPrice={card.curPrice} prevPrice={card.prevPrice} />
          ))}
        </div>
        <div className={styles.carouselContainer}>
          <button onClick={prevCard} className={styles.carouselButton}>
            <ArrowBackIosNewOutlinedIcon className={styles.icon} />
          </button>
          <div>
            <Card
              image={cardData[currentIndex].image}
              name={cardData[currentIndex].name}
              prevPrice={cardData[currentIndex].prevPrice}
              curPrice={cardData[currentIndex].curPrice}
            />
          </div>
          <button onClick={nextCard} className={styles.carouselButton}>
            <ArrowForwardIosOutlinedIcon className={styles.icon} />
          </button>
        </div>
        <button className={styles.viewAllButton}>
          <div className={styles.viewAllButtonContent}>
            <div>View All</div>
            <img src={right} alt="" />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Propeller;
