import React from "react";
import { Howl } from "howler";
import musicSrc from "./09 Cosmic Love.mp3";

const music = new Howl({
  src: [musicSrc],
  preload: true
});

class Music extends React.Component {
  componentDidMount() {
    music.play();
    this.progressInterval = setInterval(() => {
        this.props.onProgress(parseFloat(music.seek()) || 0, music.duration());
    }, 500);
  }

  componentWillUnmount() {
    music.stop();
    clearInterval(this.progressInterval);
  }

  render () {
    return null;
  }
}

export default Music;
