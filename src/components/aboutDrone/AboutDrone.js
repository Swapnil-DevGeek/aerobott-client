import React from 'react';
import styles from './AboutDrone.module.css';
import agricopterLogo from "../../assets/aboutDrones/logo.png";
import certify from "../../assets/certify.png";
import img1 from "../../assets/aboutDrones/image1.png";
import img2 from "../../assets/aboutDrones/image2.png";

const AboutDrone = () => {
  return (
    <div className={styles.container}> 
        <div>
            {/* drone logo */}
            <div className={styles.logoContainer}>
              <img className={styles.logo} src={agricopterLogo} alt="Marut" />
              <div className={styles.certifyBadge}>
                <img src={certify} alt="Certified" />
                <div>DGCA Certified</div>
              </div>
            </div>
            {/* drone images */}
            <div className={styles.droneImages}>
              <div>
                <img src={img1} alt="Drone Image 1" />
              </div>
              <div>
                <img src={img2} alt="Drone Image 2" />
              </div>
            </div>
            {/* drone price */}
            <div className={styles.priceContainer}>
              <div className={styles.priceDetails}>
                <div className={styles.brandName}>Marut Drones</div>
                <div className={styles.productName}>Agricopter AG365</div>
              </div>
              <div className="flex items-center gap-3">
                <div className={styles.price}>₹ 4,56,892</div>
                <button className={styles.buyButton}>Buy Now</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default AboutDrone;
