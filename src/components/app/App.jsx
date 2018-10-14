import React from "react";

import styles from "./App.scss";
import { Parallax } from "react-spring"
import Sky from "../sky/Sky";
import Star from "../star/Star";
import Backgroundheart from "../backgroundheart/Backgroundheart";
import Heart from "../heart/Heart";
import Littlestars from "../littlestars/Littlestars";
import Eyesbackground from "../eyesbackground/Eyesbackground";
import Music from "../music/Music";

const thresholds = [
  0, 8, 13, 4 * 60 + 16
];

class App extends React.Component {
  onProgress(progressInSeconds, fullLength) {
    if (!this.parallex) {
      return;
    }

    let page = 0;

    console.log(progressInSeconds >= thresholds[page]);

    while (!(progressInSeconds >= thresholds[page] && progressInSeconds <= thresholds[page + 1])) {
      page ++;
    }

    this.parallex.scrollTo(page);
  }

  render() {
    return  (
        <div className={ styles.app }>
            <Music onProgress={ (...args) => this.onProgress(...args) }/>
            <Parallax pages={7} ref={ el => this.parallex = el }>
                <Parallax.Layer offset={0} speed={0}><Sky /></Parallax.Layer>
                <Parallax.Layer offset={1} speed={0}><Backgroundheart /></Parallax.Layer>
                <Parallax.Layer offset={1} speed={0}><Heart /></Parallax.Layer>
                <Parallax.Layer offset={0} speed={1}><Littlestars /></Parallax.Layer>
                <Parallax.Layer offset={2} speed={0}><Eyesbackground /></Parallax.Layer>
                <Parallax.Layer offset={ 0.5 } speed={ -1 }><Star /></Parallax.Layer>
            </Parallax>
        </div>
    );
  }
}

export default App;
