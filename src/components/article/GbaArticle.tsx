// eslint-disable-next-line
import react from "react";
import "./Article.css";

import Intro from "../../articles/Intro";
import Prerequisite from "../../articles/Prerequisite";
import Dismantle from "../../articles/Dismantle";
import ClickyTrigger from "../../articles/ClickyTrigger";
import AudioAmp from "../../articles/AudioAmp";
import DehumDehiss from "../../articles/DehumDehiss";
import IpsScreen from "../../articles/IpsScreen";
import UsbCRechargeable from "../../articles/UsbCRechargeable";
import Outro from "../../articles/Outro";

const GbaArticle = () => {
  return (
    <div className="article">
      <h2>Gba Modding!</h2>
      <Intro />
      <Prerequisite />
      <Dismantle />
      <ClickyTrigger />
      <AudioAmp />
      <DehumDehiss />
      <IpsScreen />
      <UsbCRechargeable />
      <Outro />
    </div>
  );
};

export default GbaArticle;
