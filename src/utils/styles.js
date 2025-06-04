export function slideStyle() {
  return {
    color: "#fff",
    fontSize: "3rem",
    height: "100vh",
    maxidth: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
}

export function earthStyles(isHeroListVisible, activeIndex) {
  let moveValue = "14vh";

  let opacity = 1;

  if (activeIndex === 0) {
    moveValue = "14vh";
  } else if (activeIndex === 1) {
    moveValue = "0vh";
  } else if (activeIndex === 2) {
    moveValue = "-12vw";
  } else if (activeIndex === 3) {
    moveValue = "-30vh";
    opacity = 1;
  } else if (activeIndex === 4) {
    moveValue = "-65vh";
    opacity = 1;
  } else if (activeIndex === 5) {
    moveValue = "-120vh";
    opacity = 0;
  } else if (activeIndex === 6) {
    moveValue = "-120vh";
    opacity = 0;
  }

  return {
    position: "fixed",
    opacity: opacity,
    // left: "50%",
    transform: `translateY(${moveValue})`,
    transition: "transform 0.6s ease-out, opacity 0.7s ease-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}

export function moonStyles(activeIndex) {
  let moveValue = "200vh";
  let opacity = 1;

  if (activeIndex === 5) {
    moveValue = "30vh";
    opacity = 1;
  } else if (activeIndex === 6) {
    moveValue = "-130vh";
    opacity = 0;
  }

  //   let moveValue = "200vh";
  // let opacity = 1;

  // if (activeIndex === 4) {
  //   moveValue = "30vh";
  //   opacity = 1;
  // } else if (activeIndex === 5) {
  //   moveValue = "-130vh";
  //   opacity = 0;
  // }

  return {
    position: "fixed",
    opacity: opacity,
    left: "65%",
    transform: `translateY(${moveValue})`,
    transition: "transform 1.5s ease-out, opacity 0.9s ease-in-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}

export function bottomEarthStyles(activeIndex) {
  let moveValue = "-800px";

  if (activeIndex === 5) {
    moveValue = "-16vw";
  } else if (activeIndex === 6) {
    moveValue = "0vw";
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
