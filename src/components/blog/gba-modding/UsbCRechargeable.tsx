import ArticleCard from "../../common/ArticleCard";
import Image from "../../common/Image";

const UsbCRechargeable = () => (
  <ArticleCard>
    <h3>USB-C Rechargeable Battery</h3>
    <p>
      This is probably the easiest of the mods to install. If you have a new
      shell it will most likely be pre-cut so you will not need to modify it. If
      you are instead using a non pre-cut shell or an original shell, you might
      need to cut of some plastic parts that are sticking out in the battery
      compartment.
    </p>
    <Image
      path="img/gba-modding/battery/gba_metal_thingy.jpeg"
      alt="metal thingy that must be removed"
    />
    <p>
      First you must remove the metal battery thingy on the image shown above.
      It should be quite easy to just slide off.
    </p>
    <Image
      path="img/gba-modding/battery/gba_battery_insert.jpeg"
      alt="inserting battery"
    />
    <p>
      Now simply put the battery kit inside. You might need to wiggle it in, but
      it should be fairly easy. Put the back cover on, and that should be it!
    </p>
    <Image
      path="img/gba-modding/battery/gba_cover_fit.jpeg"
      alt="if the cover doesn't close correctly"
    />
    <p>
      Note: If you can't close the back cover, it might be that the USB-C port
      is not properly aligned with the cover hole. Use a tweezer to (carefully!)
      align the port and the hole when closing the lid.
    </p>
  </ArticleCard>
);

export default UsbCRechargeable;
