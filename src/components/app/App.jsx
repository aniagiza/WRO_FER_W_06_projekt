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
import Eyes2background from "../eyes2background/Eyes2background";
import Eyesreverse from "../eysereverse/Eyesreverse";
import Eyes from "../eyes/Eyes";
import Blackeyes from "../blackeyes/Blackeyes";
import Starsmoonback from "../starsmoonback/Starsmoonback";
import Bigstars from "../bigstars/Bigstars";
import Dark from "../dark/Dark";
import Daynight from "../daynight/Daynight";


const thresholds = [
  0, 4, 10, 16, 28, 38, 45, 50 * 60 + 16
];

class App extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      page: 0,
      music: true
    }
  };

  shouldComponentUpdate(nextProps, nextState) {
      return nextState.page !== this.state.page;
  }

  componentDidUpdate() {
      this.parallex.scrollTo(this.state.page);
  }

  onProgress(progressInSeconds, fullLength) {
    if (!this.parallex) {
      return;
    }

    let page = 0;

    console.log(progressInSeconds >= thresholds[page]);

    while (!(progressInSeconds >= thresholds[page] && progressInSeconds <= thresholds[page + 1])) {
      page ++;
    }

    this.setState({ page });
  }

  render() {
    return  (
        <div className={ styles.app }>
            { this.state.music && <Music onProgress={ (...args) => this.onProgress(...args) }/> }
            <Parallax scrolling={ false } pages={7} ref={ el => {
              this.parallex = el;
              this.parallex && this.parallex.scrollTo(this.state.page);
            } }>
                <Parallax.Layer offset={0} speed={0}><Sky /></Parallax.Layer>
                <Parallax.Layer offset={1} speed={0}><Backgroundheart /></Parallax.Layer>
                <Parallax.Layer offset={1} speed={0}><Heart /></Parallax.Layer>
                <Parallax.Layer offset={0} speed={1}><Littlestars /></Parallax.Layer>
                <Parallax.Layer offset={2} speed={0}><Eyesbackground /></Parallax.Layer>
                <Parallax.Layer offset={2} speed={1}><Eyes /></Parallax.Layer>
                <Parallax.Layer offset={2} speed={2}><Littlestars /></Parallax.Layer>
                <Parallax.Layer offset={3} speed={0}><Eyes2background /></Parallax.Layer>
                <Parallax.Layer offset={3} speed={1}><Blackeyes /></Parallax.Layer>
                <Parallax.Layer offset={4} speed={0}><Starsmoonback /></Parallax.Layer>
                <Parallax.Layer offset={4} speed={-2}><Bigstars /></Parallax.Layer>
                <Parallax.Layer offset={5} speed={-0.001}><Dark /></Parallax.Layer>
                <Parallax.Layer offset={6} speed={0}><Daynight /></Parallax.Layer>
                <Parallax.Layer offset={ 0.5 } speed={ -1 }><Star page={this.state.page}/></Parallax.Layer>
            </Parallax>
        </div>
    );
  }
}

export default App;
