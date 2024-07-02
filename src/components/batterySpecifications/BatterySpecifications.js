import React from 'react';
import styles from './BatterySpecifications.module.css';
import pdf from '../../assets/batteryDetails/pdf.png';

const SpecificationSection = () => {
    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Specification</h2>
            <table className={styles.specificationTable}>
                <tbody>
                <tr>
                    <td className={styles.label}>Brand</td>
                    <td className={styles.value}>mPower Lithium</td>
                </tr>
                <tr>
                    <td className={styles.label}>Capacity</td>
                    <td className={styles.value}>mPower 25200mAh</td>
                </tr>
                <tr>
                    <td className={styles.label}>Cells</td>
                    <td className={styles.value}>Cylindrical</td>
                </tr>
                <tr>
                    <td className={styles.label}>Charge current, upto 1c</td>
                    <td className={styles.value}>25A</td>
                </tr>
                <tr>
                    <td className={styles.label}>Charging Voltage</td>
                    <td className={styles.value}>25.2V</td>
                </tr>
                <tr>
                    <td className={styles.label}>Compatible With</td>
                    <td className={styles.value}>Any 10L drone</td>
                </tr>
                <tr>
                    <td className={styles.label}>Configuration</td>
                    <td className={styles.value}>6S6P/21.6V</td>
                </tr>
                <tr>
                    <td className={styles.label}>Connectors</td>
                    <td className={styles.value}>XT90-S</td>
                </tr>
                <tr>
                    <td className={styles.label}>Cooling Type</td>
                    <td className={styles.value}>Air</td>
                </tr>
                <tr>
                    <td className={styles.label}>Country Of Origin</td>
                    <td className={styles.value}>India</td>
                </tr>
                <tr>
                    <td className={styles.label}>Discharge Plug</td>
                    <td className={styles.value}>XT90-S</td>
                </tr>
                <tr>
                    <td className={styles.label}>Discharge Rate</td>
                    <td className={styles.value}>11C</td>
                </tr>
                <tr>
                    <td className={styles.label}>Lower cut off voltage</td>
                    <td className={styles.value}>15V</td>
                </tr>
                <tr>
                    <td className={styles.label}>Max. Dis Current</td>
                    <td className={styles.value}>270A</td>
                </tr>
                <tr>
                    <td className={styles.label}>Nominal Voltage</td>
                    <td className={styles.value}>21.6V</td>
                </tr>
                <tr>
                    <td className={styles.label}>Series</td>
                    <td className={styles.value}>6S</td>
                </tr>
                <tr>
                    <td className={styles.label}>Set Charging Voltage</td>
                    <td className={styles.value}>25.2V</td>
                </tr>
                <tr>
                    <td className={styles.label}>Set Discharge Voltage</td>
                    <td className={styles.value}>18V</td>
                </tr>
                </tbody>
            </table>
            <h3 className={styles.subtitle}>Key Feature</h3>
            <ul className={styles.list}>
                <li>2X times the life cycle of Lithium Polymer Batteries.</li>
            </ul>

            <h3 className={styles.subtitle}>Additional Details</h3>
            <ul className={styles.list}>
                <li>Made from high-energy density Lithium Ion chemistry</li>
                <li>Sprays up to 650 acres. Lowest cost per acre</li>
                <li>Shipped within 48 hours</li>
                <li>Made in India at its Chennai factory</li>
                <li>BIS certified</li>
                <li>High quality manufacturing for long life</li>
                <li>Warranty up to 6 month or 80% Depth of Discharge</li>
                <li>mPower batteries used by 35 drone manufacturers</li>
            </ul>

            <h3 className={styles.subtitle}>Documents</h3>
            <div className={styles.document1}>
                <a href="/path/to/mPower_6S_25200_mAh_Specification.pdf" className={styles.documentLink} download>
                    <img src={pdf} alt="PDF Icon" className={styles.pdfIcon} />
                    mPower 6S 25200 mAh Specification
                    <span className={styles.download}>Download</span>
                </a>
            </div>
            <div className={styles.document2}>
                <a href="/path/to/mPower_6S_25200_mAh_Specification_Download.pdf" className={styles.documentLink} download>
                    <img src={pdf} alt="PDF Icon" className={styles.pdfIcon} />
                    mPower 6S 25200 mAh Specification Download
                    <span className={styles.download}>Download</span>
                </a>
            </div>
        </div>
    );
}

export default SpecificationSection;