// eslint-disable-next-line
import react from "react";
import ArticleCard from "../../common/ArticleCard";
import Image from "../../common/Image";

const ClickyTrigger = () => (
  <ArticleCard>
    <h3>Clicky Trigger Buttons</h3>
    <p>
      The old triggers for the GBA doesn't really have the same clicky feedback
      that the GBA SP triggers have. With this mod the triggers will feel more
      like on its sibling system.
    </p>
    <Image
      path="img/gba-modding/triggers/gba_trigger_desolder.jpeg"
      alt="desoldering trigger"
    />
    <p>You need to desolder the two outer tin points near the trigger.</p>
    <Image
      path="img/gba-modding/triggers/gba_trigger_desolder_pump.jpeg"
      alt="using desolder pump on trigger"
    />
    <p>
      Hold the soldering iron in one hand, and the desolder pump with the other
      to easily remove the old trigger. (I don't have three hands, so it's hard
      to show me holding both at the same time.)
    </p>
    <Image
      path="img/gba-modding/triggers/gba_trigger_pulled_out.jpeg"
      alt="trigger pulled out"
    />
    <p>
      With the solder removed, simply wriggle and pull the trigger out off the
      socket.
    </p>
    <Image
      path="img/gba-modding/triggers/gba_trigger_replaced.jpeg"
      alt="trigger replaced"
    />
    <p>
      Put the new trigger where the old one was. You might need to bend the
      metal pins to fit it in. Only 2 of the 4 pins on the trigger is needed.
      After soldering the trigger in place, you can remove the extra pins with a
      wire cutter.
    </p>
    <p>Repeat this for the other trigger.</p>
  </ArticleCard>
);

export default ClickyTrigger;
