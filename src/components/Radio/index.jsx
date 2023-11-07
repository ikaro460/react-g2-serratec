import React from "react";
import "./styles.css";

const Radio1 = () => {
  return (
    <div>
      <audio
        className="audio-box"
        autoPlay={false}
        controls
        src="https://27393.live.streamtheworld.com/RADIO_89FM_SC"
      ></audio>
    </div>
  );
};

export default Radio1;
