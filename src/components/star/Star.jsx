import React from "react";
import styles from "./Star.scss";

export default ({ page }) => <div className={ `${styles.star} ${styles["page_" + page]}` }></div>;
