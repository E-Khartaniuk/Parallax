export function slideStyle() {
  return {
    color: "#fff",
    fontSize: "3rem",
    height: "100vh",
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

export function earthStyles(isHeroListVisible, activeIndex) {
  let moveValue = "14vh";

  let opacity = 1;

  if (isHeroListVisible && activeIndex === 0) {
    moveValue = "-0vh";
  } else if (activeIndex === 1) {
    moveValue = "-12vh";
  } else if (activeIndex === 2) {
    moveValue = "-18vw";
  } else if (activeIndex === 3) {
    moveValue = "-65vh";
    opacity = 1;
  } else if (activeIndex === 4) {
    moveValue = "-900vh";
    opacity = 0;
  } else if (activeIndex === 5) {
    moveValue = "-100vh";
    opacity = 0;
  }

  return {
    position: "fixed",
    top: moveValue,
    opacity: opacity,
    left: "75%",
    transform: "translateX(-50%)",
    transition: "top 0.6s ease-out, opacity 0.7s ease-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}

export function moonStyles(activeIndex) {
  let moveValue = "-600px";
  let opacity = 1;

  if (activeIndex === 4) {
    moveValue = "450px";
    opacity = 1;
  } else if (activeIndex === 5) {
    moveValue = "2100px";
    opacity = 0;
  }

  return {
    position: "fixed",
    bottom: moveValue,
    opacity: opacity,
    left: "77%",
    transform: "translateX(-50%)",
    transition: "bottom 1.2s ease-out, opacity 0.7s ease-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}

export function bottomEarthStyles(activeIndex) {
  let moveValue = "-800px"; // по умолчанию спрятано глубоко

  if (activeIndex === 4) {
    moveValue = "-16vw"; // слегка выглядывает
  } else if (activeIndex === 5) {
    moveValue = "0vw"; // сильно выглядывает
  }

  return {
    position: "fixed",
    bottom: moveValue,
    width: "100vw",
    height: "400px",
    left: "50%",
    transform: "translateX(-50%)",
    opacity: 1,
    objectFit: "cover",
    transition: "bottom 0.8s ease-out, opacity 0.4s ease-out",
    zIndex: -1,
    pointerEvents: "none",
    overflow: " unset",
  };
}
