import React from "react";
import styles from "./Backgroundheart.scss";

export default() => <div className ={styles.backgroundheart}>
<div className={styles.starWrapper}>
  <p className={ styles.star}>A falling star</p>
</div>
<div className={styles.fellWrapper}>
  <p className={ styles.fell }> fell from your heart</p>
</div>
</div>;
