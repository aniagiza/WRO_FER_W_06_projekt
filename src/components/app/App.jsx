import React from "react";

import styles from "./App.scss";
import { Parallax } from "react-spring"
import Sky from "../sky/Sky";
import Star from "../star/Star";

const App = () => (
    <div className={ styles.app }>
        <Parallax pages={2}>
            <Parallax.Layer offset={0} speed={0}><Sky /></Parallax.Layer>

            <Parallax.Layer offset={ 0.5 } speed={ -1 }><Star /></Parallax.Layer>
        </Parallax>
    </div>
);

export default App;
