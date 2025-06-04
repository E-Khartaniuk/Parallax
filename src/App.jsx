import { Keyboard, Mousewheel } from "swiper/modules";
import "./App.css";
import CrowdsourcingSlide from "./components/CrowdsourcingSlide/CrowdsourcingSlide";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import LLMLeaderboardSlide from "./components/LLMLeaderboardSlide.jsx/LLMLeaderboardSlide";
import ProjectsIntegratedSlide from "./components/ProjectsIntegratedSlide/ProjectsIntegratedSlide";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState, useRef, useEffect } from "react";
import earth from "./img/moon.png";
import moon from "./img/image 122.png";
import bottomEarth from "./img/bottom earth.png";
import {
  bottomEarthStyles,
  earthStyles,
  moonStyles,
  slideStyle,
} from "./utils/styles";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";
import RedDecorationElement from "./components/ui/ColorDecorationElements/redDecorationElement";
import BlueDecorationElement from "./components/ui/ColorDecorationElements/blueDecorationElement";
import Blank from "./components/Blank/Blank";

function App() {
  const slidesCount = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHeroListVisible, setIsHeroListVisible] = useState(false);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    console.log(activeIndex);
    if (swiper.activeIndex === 1) {
      setIsHeroListVisible(true);
    } else {
      setIsHeroListVisible(false);
    }
  };

  const maxOffset = 60;
  const backgroundOffset = (activeIndex / (slidesCount - 1)) * maxOffset;

  return (
    <div
      id="swiper-container"
      style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="background"
        style={{
          backgroundPosition: `center ${backgroundOffset}%`,
        }}
      />
      <img
        src={earth}
        alt="earth"
        className="earthBackground"
        style={earthStyles(isHeroListVisible, activeIndex)}
      />
      <img
        src={moon}
        alt="moon"
        className="moon"
        style={moonStyles(activeIndex, slidesCount)}
      />
      <img
        src={bottomEarth}
        alt="earth"
        className="earth"
        style={bottomEarthStyles(activeIndex, slidesCount)}
      />
      <RedDecorationElement
        activeIndex={activeIndex}
        isHeroListVisible={isHeroListVisible}
      />
      <BlueDecorationElement
        activeIndex={activeIndex}
        isHeroListVisible={isHeroListVisible}
      />

      <HeroSlide
        activeIndex={activeIndex}
        isHeroListVisible={isHeroListVisible}
      />

      <Swiper
        direction="vertical"
        speed={600}
        slidesPerView={1}
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Keyboard]}
        style={{ height: "100vh", willChange: "transform" }}>
        <SwiperSlide style={slideStyle()}>
          <Blank></Blank>
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <Blank></Blank>
        </SwiperSlide>

        <SwiperSlide style={slideStyle()}>
          <ProjectsIntegratedSlide isActive={activeIndex === 2} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <CrowdsourcingSlide />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <LLMLeaderboardSlide />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <JoinCommunity />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <Footer />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
