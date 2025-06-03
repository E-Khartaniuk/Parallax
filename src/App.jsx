import { Keyboard, Mousewheel } from "swiper/modules";
import "./App.css";
import CrowdsourcingSlide from "./components/CrowdsourcingSlide/CrowdsourcingSlide";
import HeroSlide from "./components/HeroSlide/HeroSlide";
import LLMLeaderboardSlide from "./components/LLMLeaderboardSlide.jsx/LLMLeaderboardSlide";
import ProjectsIntegratedSlide from "./components/ProjectsIntegratedSlide/ProjectsIntegratedSlide";
import "swiper/css";
import { SwiperSlide, Swiper } from "swiper/react";
import { useState } from "react";
import earth from "./img/moon.png";
import moon from "./img/image 122.png";
import bottomEarth from "./img/bottom earth.png";
import blueDecorationBG from "./img/blueDecorationBG.svg";
import redDecorationBG from "./img/redDecorationBG.svg";
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
  const [activeScrol, setActiveScrol] = useState(false);
  const [isFirstSlideMoove, setIsFirstSlideMoove] = useState(false);
  const [isHeroListVisible, setIsHeroListVisible] = useState(false);

  const [scrollStep, setScrollStep] = useState(0);

  const handleWheel = () => {
    if (activeIndex !== 0 || isFirstSlideMoove) return;

    setIsFirstSlideMoove(true);

    if (scrollStep === 0) {
      setIsHeroListVisible(true); // Показываем список
      setScrollStep(1); // Следующий шаг
      setActiveScrol(true);
    } else if (scrollStep === 1) {
      setActiveScrol(true); // Разрешаем свайп
      setScrollStep(2); // Третий скрол уже уйдёт
    }

    setTimeout(() => {
      setIsFirstSlideMoove(false);
    }, 600);
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);

    if (swiper.activeIndex !== 0) {
      setScrollStep(2); // Дальше можно скроллить спокойно
    } else {
      setActiveScrol(false);
      setIsHeroListVisible(false);
      setScrollStep(0); // Вернулись на первый слайд — снова по шагам
    }
  };

  const maxOffset = 60; // Максимальный сдвиг фона в процентах
  const backgroundOffset = (activeIndex / (slidesCount - 1)) * maxOffset;
  const earthOffset = activeIndex * 200;

  console.log(activeIndex);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      onWheel={handleWheel}>
      {/* Фон */}
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
        style={earthStyles(earthOffset, isHeroListVisible, activeIndex)}
      />
      {/* moon */}
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
