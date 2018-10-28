import React from "react";
import EyeReverse from "../eyereverse1/Eyereverse1";
import styles from "./Eyesreverse.scss";

console.log(styles, "1111");

export default () => (
  <div>
    <div className ={styles.leftEye}><EyeReverse/></div>;
    <div className ={styles.rightEye}><EyeReverse/></div>;
  </div>
);
