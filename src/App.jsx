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

function App() {
  const slidesCount = 5;
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHeroListVisible, setIsHeroListVisible] = useState(false);
  const swiperRef = useRef(null);
  const touchStartY = useRef(null);
  const touchEndY = useRef(null);
  const isProcessing = useRef(false);

  const handleWheel = (e) => {
    if (isProcessing.current || activeIndex !== 0) return;
    isProcessing.current = true;
    e.preventDefault();

    if (!isHeroListVisible) {
      setIsHeroListVisible(true);
    } else {
      setTimeout(() => {
        swiperRef.current?.slideNext(600);
      }, 0);
    }

    setTimeout(() => {
      isProcessing.current = false;
    }, 600);
  };

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e) => {
    if (isProcessing.current || activeIndex !== 0) return;
    isProcessing.current = true;

    touchEndY.current = e.changedTouches[0].clientY;
    const deltaY = touchStartY.current - touchEndY.current;

    if (deltaY > 100) {
      if (!isHeroListVisible) {
        setIsHeroListVisible(true);
      } else {
        setTimeout(() => {
          swiperRef.current?.slideNext(600);
        }, 0);
      }
    }

    setTimeout(() => {
      isProcessing.current = false;
    }, 600);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (swiper.activeIndex !== 0) {
      setIsHeroListVisible(true);
    } else {
      setIsHeroListVisible(false);
    }
  };

  const handleSlideChangeTransitionStart = (swiper) => {
    if (activeIndex === 0 && !isHeroListVisible && swiper.activeIndex > 0) {
      swiper.slideTo(0, 0);
    }
  };

  useEffect(() => {
    const container = document.querySelector("#swiper-container");
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
      container.addEventListener("touchstart", handleTouchStart);
      container.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel, { passive: false });
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchend", handleTouchEnd);
      }
    };
  }, [activeIndex, isHeroListVisible]);

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

      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        direction="vertical"
        speed={600}
        slidesPerView={1}
        mousewheel={{ enabled: true, sensitivity: 1 }}
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
        onSlideChangeTransitionStart={handleSlideChangeTransitionStart}
        modules={[Mousewheel, Keyboard]}
        style={{ height: "100vh", willChange: "transform" }}>
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
