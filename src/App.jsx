import { Keyboard, Mousewheel } from "swiper/modules";
import "./App.css";
import CrowdsourcingSlide from "./components/CrowdsourcingSlide/CrowdsourcingSlide";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import LLMLeaderboardSlide from "./components/LLMLeaderboardSlide.jsx/LLMLeaderboardSlide";
import ProjectsIntegratedSlide from "./components/ProjectsIntegratedSlide/ProjectsIntegratedSlide";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState, useRef } from "react";
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

function App() {
  const slidesCount = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeScrol, setActiveScrol] = useState(true);
  const [isFirstSlideMoove, setIsFirstSlideMoove] = useState(false);
  const [isHeroListVisible, setIsHeroListVisible] = useState(false);
  const [scrollStep, setScrollStep] = useState(0);

  const touchStartY = useRef(null);
  const touchEndY = useRef(null);

  const handleWheel = () => {
    if (activeIndex !== 0 || isFirstSlideMoove) return;

    setIsFirstSlideMoove(true);

    if (scrollStep === 0) {
      setIsHeroListVisible(true);
      setScrollStep(1);
      setActiveScrol(true);
    } else if (scrollStep === 1) {
      setActiveScrol(true);
      setScrollStep(2);
    }

    setTimeout(() => {
      setIsFirstSlideMoove(false);
    }, 600);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;

    if (deltaY > 30 && activeIndex === 0 && scrollStep < 2) {
      // свайп вверх
      handleWheel();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

    if (swiper.activeIndex !== 0) {
      setScrollStep(2);
    } else {
      setActiveScrol(false);
      setIsHeroListVisible(false);
      setScrollStep(0);
    }
  };

  const maxOffset = 60;
  const backgroundOffset = (activeIndex / (slidesCount - 1)) * maxOffset;

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}>
      {/* background */}
      <div
        className="background"
        style={{
          backgroundPosition: `center ${backgroundOffset}%`,
        }}
      />
      {/* earth */}
      <img
        src={earth}
        alt="earth"
        className="earthBackground"
        style={earthStyles(isHeroListVisible, activeIndex)}
      />
      {/* moon */}
      <img
        src={moon}
        alt="moon"
        className="moon"
        style={moonStyles(activeIndex, slidesCount)}
      />
      {/* bottomEarth */}
      <img
        src={bottomEarth}
        alt="earth"
        className="earth"
        style={bottomEarthStyles(activeIndex, slidesCount)}
      />
      <RedDecorationElement
        activeIndex={activeIndex}
        isHeroListVisible={isHeroListVisible}></RedDecorationElement>

      <BlueDecorationElement
        activeIndex={activeIndex}
        isHeroListVisible={isHeroListVisible}></BlueDecorationElement>

      <Swiper
        allowSlideNext={activeScrol}
        allowTouchMove={activeScrol}
        direction="vertical"
        speed={600}
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Keyboard]}
        style={{ height: "100vh" }}>
        <SwiperSlide style={slideStyle()}>
          <HeroSlide showList={isHeroListVisible} />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <ProjectsIntegratedSlide isActive={activeIndex === 1} />
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
