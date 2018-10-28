import React from "react";
import EyeReverse from "../eyereverse1/Eyereverse1";
import styles from "./Blackeyes.scss";

export default () => (
  <div className={ styles.eyes }>
    <div className ={styles.blackleftEye}><EyeReverse/></div>
    <div className ={styles.blackrightEye}><EyeReverse/></div>
    <div className={styles.screamWrapper}>
      <p className={ styles.scream}>I screamed aloud as it tore thorough them</p>
    </div>
    <div className={styles.blindWrapper}>
      <p className={ styles.blind }> and now it's left me blind </p>
    </div>
    </div>
);
