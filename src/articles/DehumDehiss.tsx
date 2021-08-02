// eslint-disable-next-line
import react from "react";
import Image from "../components/article/Image";
import "../components/article/Article.css";

const DehumDehiss = () => (
  <div>
    <h3>Dehum Dehiss Kit</h3>
    <p>
      When adding more powerful hardware to the GBA, the system uses more power
      than it was designed to sustain. One of the consequences are more
      background noise in the form of high-pitched hiss and a low-pitched hum.
      This mod removes a lot of these excessive noises. It's highly recommended
      if these noises annoy you.
    </p>
    <p>
      This is quite a tricky mod to install. There are only 4 points to solder,
      but 2 of them are directly on two small components that are too easy to
      accidentally solder off. Don't put your soldering iron on the small
      component for more than a second!
    </p>
    <Image
      path="images/dehumdehiss/gba_dehum_dehiss_soldered.jpeg"
      alt="dehum dehiss kit soldered in place"
    />
    <p>
      Pre-tin all contact points before soldering them together. Solder the
      points shown above. The board is lying above some components, so it
      will not be perfectly flush.
    </p>
  </div>
);

export default DehumDehiss;
