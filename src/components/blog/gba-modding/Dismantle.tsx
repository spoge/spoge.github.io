import ArticleCard from "../../common/ArticleCard";
import Image from "../../common/Image";

const Dismantle = () => (
  <ArticleCard>
    <h3 className="padding-top-big">GBA Dismantling</h3>
    <p>
      The most important part of the GBA is the motherboard. To either install
      it into a new shell or just do modifications to it, we need to dismantle
      the GBA to get access to all the necessary points.
    </p>
    <p>
      It’s quite simple and straightforward to take the GBA apart. There are
      however some things to keep in mind.
    </p>
    <ul>
      <li>Keep your screws safe so you don’t lose them</li>
      <li>Be very careful when tightening any screw so you don’t strip it</li>
    </ul>

    <Image
      path="img/gba-modding/dismantle/gba_tools.jpeg"
      alt="tools needed for dismantling"
    />
    <p>
      You need two screwdrivers to disassemble a GBA: a 2.0mm Tri-Wing
      Screwdriver (Y tipp) and a 2.0mm Philips Screwdriver (X tip).
    </p>

    <Image
      path="img/gba-modding/dismantle/gba_backside.jpeg"
      alt="backside of gba"
    />
    <p>Remove the 7 screws shown in the image above.</p>

    <Image
      path="img/gba-modding/dismantle/gba_loose_screws.jpeg"
      alt="screws placed safely"
    />
    <p>And put them somewhere safe!</p>

    <Image
      path="img/gba-modding/dismantle/gba_backside_off.jpeg"
      alt="gba backside"
    />
    <p>You can now easily just pull of the back of the GBA.</p>

    <Image
      path="img/gba-modding/dismantle/gba_backside_off_overview.jpeg"
      alt="gba backside overview"
    />
    <p>
      Remove loose plastic and the triggers. Then remove the two screws shown
      above. Put them somewhere you won't lose them.
    </p>
    <p>
      Now it's time to disconnect the ribbon cable that connects the screen to
      the motherboard. The cable is located at the top of the board, secured by
      two plastic pins.
    </p>

    <Image
      path="img/gba-modding/dismantle/gba_screen_ribbon_pin.jpeg"
      alt="ribbon cable open pin"
    />
    <p>
      Carefully push the two pins out with either some tweezers or your fingers.
      They should come out quite easily.
    </p>

    <Image
      path="img/gba-modding/dismantle/gba_screen_ribbon_disconnect.jpeg"
      alt="disconnect ribbon cable"
    />
    <p>
      Gently grab and pull the ribbon cable out. It might take a little more
      force than you might expect, but be careful. After this you can just pull
      the motherboard out.
    </p>

    <Image
      path="img/gba-modding/dismantle/gba_backside_of_screen.jpeg"
      alt="front plate of gba taken off"
    />
    <p>
      This is the front plate of the GBA. If you want to re-use either the
      buttons, rubber pads, screen or shell, it should be straight forward to
      extract those. If not, you can put it away.
    </p>

    <Image
      path="img/gba-modding/dismantle/gba_motherboard.jpeg"
      alt="motherboard extracted"
    />
    <p>
      This is the most important part of the GBA. The motherboard is what we
      want to install into a new shell or do other modifications to.
    </p>
  </ArticleCard>
);

export default Dismantle;
