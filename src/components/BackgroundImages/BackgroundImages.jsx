import earth from "../../img/moon.png";
import moon from "../../img/image 122.png";
import bottomEarth from "../../img/bottom earth.png";
import rocket from "../../img/rocket.png";
import comet from "../../img/comet.png";
import {
  bottomEarthStyles,
  cometStyles,
  earthStyles,
  moonStyles,
  rocketStyles,
} from "../../utils/styles";
import RedDecorationElement from "../ui/ColorDecorationElements/redDecorationElement";
import BlueDecorationElement from "../ui/ColorDecorationElements/blueDecorationElement";

function BackgroundImages({ activeIndex }) {
  return (
    <>
      <img
        src={earth}
        alt="earth"
        className="earthBackground"
        style={earthStyles(activeIndex)}
      />
      <img
        src={moon}
        alt="moon"
        className="moon"
        style={moonStyles(activeIndex)}
      />
      <img
        src={bottomEarth}
        alt="earth"
        className="earth"
        style={bottomEarthStyles(activeIndex)}
      />
      <img
        src={rocket}
        alt="rocket"
        className="rocket"
        style={rocketStyles(activeIndex)}
      />
      <img
        src={comet}
        alt="comet"
        className="comet"
        style={cometStyles(activeIndex)}
      />

      <RedDecorationElement activeIndex={activeIndex} />
      <BlueDecorationElement activeIndex={activeIndex} />
    </>
  );
}

export default BackgroundImages;
