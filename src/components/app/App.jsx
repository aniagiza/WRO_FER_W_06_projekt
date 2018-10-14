import React from "react";

import styles from "./App.scss";
import { Parallax } from "react-spring"
import Sky from "../sky/Sky";
import Star from "../star/Star";
import Backgroundheart from "../backgroundheart/Backgroundheart";
import Heart from "../heart/Heart";
import Littlestars from "../littlestars/Littlestars";
import Eyesbackground from "../eyesbackground/Eyesbackground";

const App = () => (
    <div className={ styles.app }>
        <Parallax pages={7}>
            <Parallax.Layer offset={0} speed={0}><Sky /></Parallax.Layer>
            <Parallax.Layer offset={1} speed={0}><Backgroundheart /></Parallax.Layer>
            <Parallax.Layer offset={1} speed={0}><Heart /></Parallax.Layer>
            <Parallax.Layer offset={0} speed={1}><Littlestars /></Parallax.Layer>
            <Parallax.Layer offset={2} speed={0}><Eyesbackground /></Parallax.Layer>
            <Parallax.Layer offset={ 0.5 } speed={ -1 }><Star /></Parallax.Layer>
        </Parallax>
    </div>
);

export default App;
