import ArticleCard from "../../common/ArticleCard";

const Prerequisite = () => (
  <ArticleCard>
    <h3>Prerequisite</h3>
    <p>
      A few mods are quite easy to install, while many do require some
      soldering. For any modding you will need the GBA and tools for
      disassembling it. For the mods that require soldering, you will obviously
      need a soldering iron with solder.
    </p>
    <p className="margin-bottom-small">Shell replacement:</p>
    <ul>
      <li>Shell</li>
      <li>Buttons</li>
      <li>Rubber pads</li>
      <li>
        GBA Screen lens (optional, might be included in any IPS Screen Kit)
      </li>
      <li>Stickers</li>
    </ul>
    <p className="margin-bottom-small">USB-C Rechargeable Battery:</p>
    <ul>
      <li>CleanJuice USB-C Battery Pack (required)</li>
      <li>Back cover for the shell (required, might be included)</li>
    </ul>
    <p className="margin-bottom-small">Screen replacement:</p>
    <ul>
      <li>GBA IPS Screen Kit (required)</li>
      <li>GBA IPS Lens (optional, but should be included in IPS Screen Kit)</li>
      <li>GBA IPS Screen Bracket (optional)</li>
      <li>GBA IPS Screen Dust Guard (optional)</li>
      <li>Soldering Iron (required, if you want brightness controls)</li>
    </ul>
    <p className="margin-bottom-small">Audio Amplifier and dehum/dehiss:</p>
    <ul>
      <li>CleanAmp (required, for better volume)</li>
      <li>
        Dehum Dehiss Kit (required, for removing excess noise. CleanAmp is not
        required)
      </li>
      <li>New speaker (optional)</li>
      <li>Soldering Iron (required)</li>
    </ul>

    <p className="margin-bottom-small">Clicky Trigger Buttons:</p>
    <ul>
      <li>GBA Clicky Triggers (required)</li>
      <li>Soldering Iron (required)</li>
      <li>Desolder Pump (recommended)</li>
    </ul>

    <p className="margin-bottom-small">LED Trigger Buttons:</p>
    <ul>
      <li>LED (required)</li>
      <li>Transparent L/R button (required)</li>
      <li>Soldering Iron (required)</li>
    </ul>
  </ArticleCard>
);

export default Prerequisite;
