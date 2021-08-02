// eslint-disable-next-line
import react from "react";
import Image from "../../article/Image";
import "../../article/Article.css";

const AudioAmp = () => (
  <div>
    <h3>Audio Amplifier</h3>
    <p>
      With the AudioAmp mod you can boost the quality and the speaker volume to
      almost 500% of the original. It's recommended to install both the AudioAmp
      chip and a new speaker. The Dehum Dehiss Kit is also strongly recommended
      if you want to remove background noise from the system (affects both
      speaker and headphones).
    </p>
    <Image
      path="images/audioamp/gba_audioamp_remove_speaker.jpeg"
      alt="removing speaker"
    />
    <p>
      Begin with removing the old speaker. Simply heat up the two solder points
      shown above, and pull the wires loose.
    </p>
    <Image
      path="images/audioamp/gba_audioamp_placed.jpeg"
      alt="placing the audioamp"
    />
    <p>
      The AudioAmp chip will be soldered in this position. It's recommended to
      pre-tin the soldier points on both the motherboard and on the chip before
      you start.
    </p>
    <Image
      path="images/audioamp/gba_audioamp_soldered.jpeg"
      alt="finished soldering the audioamp"
    />
    <p>
      When the board is soldered in place, solder the new speaker to the 2
      points as shown above. It doesn't matter which of the speaker wires go to
      which of the solder point.
    </p>
  </div>
);

export default AudioAmp;
