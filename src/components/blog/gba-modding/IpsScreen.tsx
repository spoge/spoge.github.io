// eslint-disable-next-line
import react from "react";
import Image from "../../common/Image";

const IpsScreen = () => (
  <div>
    <h3>IPS Screen Replacement</h3>
    <p>
      The most noticeable about the original GBA after the shell, is the screen.
      The first generation of the GBA have a screen that is almost unusable by
      todays standard. Luckily we have an excellent solution: The IPS screen
      with 10 levels of brightness controls.
    </p>
    <Image
      path="img/gba-modding/screen/gba_shell.jpeg"
      alt="shell of the gba"
    />
    <p>
      It's recommended to get yourself a shell that is pre-cut for the IPS
      screen. If not it is possible to cut the shell yourself.
    </p>
    <Image
      path="img/gba-modding/screen/gba_screen_inserted.jpeg"
      alt="backside of the mounted screen"
    />
    <p>
      If you have the dust protector, you can place it now where the screen will
      go.
    </p>
    <p>
      Take the screen and the IPS screen bracket, and carefully put them in
      place like the image above. It should be a tight fit.
    </p>
    <p>
      Remove the protection plastic of the screen and the GBA IPS Lens. With the
      screen securely placed, take the lens and place it carefully on the other
      side. Maintain firm pressure.
    </p>
    <Image
      path="img/gba-modding/screen/gba_screen_replaced.jpeg"
      alt="if the cover doesn't close correctly"
    />
    <p> The screen and lens should now be perfecly placed.</p>
    <p>
      If you don't want to solder and don't need custom brightness controls, you
      can now simply connect the screen ribbon cable to the motherboard and then
      close the shell.
    </p>
    <p>
      But if you instead do want the excellent brightness controls, please
      follow along.
    </p>
    <Image
      path="img/gba-modding/screen/gba_screen_ribbon_solder.jpeg"
      alt="if the cover doesn't close correctly"
    />
    <p>
      Solder 3 thin wires to the 3 points on the ribbon cabled labeled: L, R and
      SEL. It's a good idea to use different colored wires if you have them.
    </p>
    <Image
      path="img/gba-modding/screen/gba_frontside_overview.jpeg"
      alt="frontside of the motherboard"
    />
    <Image
      path="img/gba-modding/screen/gba_screen_sel_tp2.jpeg"
      alt="if the cover doesn't close correctly"
    />
    <p>
      The wire connected to SEL, should be soldered to the contact point TP2 on
      the motherboard.
    </p>
    <p>
      To solder the other 2 wires you might need to mount the motherboard to the
      front half of the shell first.
    </p>
    <p>
      Before mounting the motherboard again, remember to put in all the buttons
      and rubber pads first.
    </p>
    <Image
      path="img/gba-modding/screen/gba_backside_overview.jpeg"
      alt="backside of the motherboard"
    />
    <Image
      path="img/gba-modding/screen/gba_trigger_L.jpeg"
      alt="solder left trigger wire"
    />
    <p>
      Solder the wire from the L label to the left trigger (remember that the
      GBA is lying face down.)
    </p>
    <Image
      path="img/gba-modding/screen/gba_trigger_R.jpeg"
      alt="solder right trigger wire"
    />
    <p>Same with the R wire, but to the right trigger.</p>
    <Image
      path="img/gba-modding/screen/gba_frankenstein.jpeg"
      alt="open gba with a wire mess"
    />
    <p>
      You can sneak the wires through the trigger holes, but I was lazy. Kapton
      tape can be used to make sure the wires don't go totally awry and get
      damaged when closing the shell.
    </p>
  </div>
);

export default IpsScreen;
