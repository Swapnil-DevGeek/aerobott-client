import React from 'react';
import right from "../../assets/arrow-right-white.png";
import battery1 from "../../assets/batteryImages/battery1.png";
import battery2 from "../../assets/batteryImages/battery2.png";
import battery3 from "../../assets/batteryImages/battery3.png";
import styles from './battery.module.css';

const cardData = [
  { image: battery1, name: "mPower 6S 25200 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector", curPrice: 2000, prevPrice: 3000 },
  { image: battery2, name: "mPower 6S 21000 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector", curPrice: 2000, prevPrice: 3000 },
  { image: battery3, name: "mPower 6S 16800 mAh Lithium Ion Drone Battery Pack with XT90-S Anti Spark Connector", curPrice: 2000, prevPrice: 3000 }
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

const Battery = () => {

  return (
    <div className={styles.parent}>
        <div className={styles.container}>
      <div className={styles.innerContainer}>
        <div>
          <h2 className={styles.title}>Buy Drone <span className={styles.titleHighlight}>Batterys</span></h2>
        </div>

        <div className={styles.cardsContainer}>
          {cardData.map((card, index) => (
            <Card key={index} name={card.name} image={card.image} curPrice={card.curPrice} prevPrice={card.prevPrice} />
          ))}
        </div>

        <button className={styles.viewAllButton}>
          <div className={styles.viewAllButtonContent}>
            <div>Shop by Category</div>
            <img src={right} alt="" />
          </div>
        </button>

      </div>
    </div>
    </div>
  );
};

export default Battery;
