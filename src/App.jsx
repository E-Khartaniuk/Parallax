import "./App.css";
import "swiper/css";
import { Keyboard, Mousewheel } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";
import { slideStyle } from "./utils/styles";
import Blank from "./components/Blank/Blank";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import ProjectsIntegratedSlide from "./components/ProjectsIntegratedSlide/ProjectsIntegratedSlide";
import CrowdsourcingSlide from "./components/CrowdsourcingSlide/CrowdsourcingSlide";
import LLMLeaderboardSlide from "./components/LLMLeaderboardSlide.jsx/LLMLeaderboardSlide";
import JoinCommunity from "./components/JoinCommunity/JoinCommunity";
import Footer from "./components/Footer/Footer";
import BackgroundImages from "./components/BackgroundImages/BackgroundImages";

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
    <div style={{ position: "relative", overflow: "hidden" }}>
      <div
        className="background"
        style={{
          backgroundPosition: `center ${backgroundOffset}%`,
        }}
      />

      <BackgroundImages activeIndex={activeIndex} />

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
          <Blank />
        </SwiperSlide>
        <SwiperSlide style={slideStyle()}>
          <Blank />
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
