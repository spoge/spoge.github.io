// eslint-disable-next-line
import react from "react";
import "./styles/Article.scss";

import Intro from "./gba-modding/Intro";
import Prerequisite from "./gba-modding/Prerequisite";
import Dismantle from "./gba-modding/Dismantle";
import ClickyTrigger from "./gba-modding/ClickyTrigger";
import AudioAmp from "./gba-modding/AudioAmp";
import DehumDehiss from "./gba-modding/DehumDehiss";
import IpsScreen from "./gba-modding/IpsScreen";
import UsbCRechargeable from "./gba-modding/UsbCRechargeable";
import Outro from "./gba-modding/Outro";

const GbaModdingArticle = () => {
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

export default GbaModdingArticle;
