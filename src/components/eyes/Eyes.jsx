import React from "react";
import Eye from "../eye1/Eye1";
import styles from "./Eyes.scss";

export default () => (
  <div className={ styles.eyes }>
    <div className ={styles.leftEye}><Eye/></div>
    <div className ={styles.rightEye}><Eye/></div>
  </div>
);
