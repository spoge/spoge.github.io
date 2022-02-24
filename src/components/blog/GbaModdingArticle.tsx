import Intro from "./gba-modding/Intro";
import Prerequisite from "./gba-modding/Prerequisite";
import Dismantle from "./gba-modding/Dismantle";
import ClickyTrigger from "./gba-modding/ClickyTrigger";
import AudioAmp from "./gba-modding/AudioAmp";
import DehumDehiss from "./gba-modding/DehumDehiss";
import IpsScreen from "./gba-modding/IpsScreen";
import UsbCRechargeable from "./gba-modding/UsbCRechargeable";
import Outro from "./gba-modding/Outro";
import Background from "../common/Background";

const GbaModdingArticle = () => {
  return (
    <>
      <Intro />
      <Prerequisite />
      <Dismantle />
      <ClickyTrigger />
      <AudioAmp />
      <DehumDehiss />
      <IpsScreen />
      <UsbCRechargeable />
      <Outro />
      <Background
        image={`${process.env.PUBLIC_URL}/img/bg/gba_wire_blur.jpeg`}
      />
    </>
  );
};

export default GbaModdingArticle;
