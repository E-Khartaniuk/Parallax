import { Keyboard, Mousewheel } from "swiper/modules";
import "./App.css";
import CrowdsourcingSlide from "./components/CrowdsourcingSlide/CrowdsourcingSlide";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import LLMLeaderboardSlide from "./components/LLMLeaderboardSlide.jsx/LLMLeaderboardSlide";
import ProjectsIntegratedSlide from "./components/ProjectsIntegratedSlide/ProjectsIntegratedSlide";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";
import moon from "./img/moon.png";
import earth from "./img/image 122.png";

function slideStyle(bg) {
  return {
    background: bg,
    color: "#fff",
    fontSize: "3rem",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

function App() {
  const slidesCount = 5;
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  const maxOffset = 100; // Максимальный сдвиг фона в процентах
  const backgroundOffset = (activeIndex / (slidesCount - 1)) * maxOffset;
  const moonOffset = activeIndex * 350;

  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      {/* Фон */}
      <div
        className="background"
        style={{
          backgroundPosition: `center ${backgroundOffset}%`,
        }}
      />
      {/* Луна */}
      <img
        src={moon}
        alt="moon"
        className="moonBackground"
        style={{
          position: "fixed",
          top: `${50 - moonOffset}px`,
          left: "85%",
          transform: "translateX(-50%)",
          transition: "top 0.6s ease-out",
          zIndex: -1,
          pointerEvents: "none",
        }}
      />
      {/* Земля */}
      <img
        src={earth}
        alt="earth"
        className="earth"
        style={{
          position: "fixed",
          bottom: activeIndex === slidesCount - 1 ? "450px" : "-200px",
          left: "85%",
          transform: "translateX(-50%)",
          transition: "bottom 1.2s ease-out, opacity 0.3s ease-out",
          opacity: activeIndex === slidesCount - 1 ? 1 : 0,
          zIndex: -1,
          pointerEvents: "none",
        }}
      />

      <Swiper
        direction="vertical"
        speed={600}
        slidesPerView={1}
        mousewheel={true}
        keyboard={{ enabled: true }}
        onSlideChange={handleSlideChange}
        modules={[Mousewheel, Keyboard]}
        style={{ height: "100vh" }}>
        <SwiperSlide style={slideStyle("rgba(0,0,0,0)")}>
          <HeroSlide />
        </SwiperSlide>
        <SwiperSlide style={slideStyle("rgba(0,0,0,0)")}>
          <CrowdsourcingSlide />
        </SwiperSlide>
        <SwiperSlide style={slideStyle("rgba(0,0,0,0)")}>
          <ProjectsIntegratedSlide />
        </SwiperSlide>
        <SwiperSlide style={slideStyle("rgba(0,0,0,0)")}>
          <LLMLeaderboardSlide />
        </SwiperSlide>{" "}
        <SwiperSlide style={slideStyle("rgba(0,0,0,0)")}>
          <LLMLeaderboardSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default App;
