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

export function earthStyles(earthOffset, isHeroListVisible, activeIndex) {
  let moveValue = "7vw";

  let opacity = 1;

  if (isHeroListVisible && activeIndex === 0) {
    moveValue = "-2vw";
  } else if (activeIndex === 1) {
    moveValue = "-9vw";
  } else if (activeIndex === 2) {
    moveValue = "-17vw";
  } else if (activeIndex === 3) {
    moveValue = "-50vw";
    opacity = 1;
  } else if (activeIndex === 4) {
    moveValue = "-100vw";
    opacity = 0;
  } else if (activeIndex === 5) {
    moveValue = "-100vw";
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

// export function earthStyles(earthOffset, isHeroListVisible, activeIndex) {
//   let moveValue = "150px";

//   if (isHeroListVisible && activeIndex === 0) {
//     moveValue = "0px";
//   } else if (activeIndex === 1) {
//     moveValue = "-100px";
//   } else if (activeIndex === 2) {
//     moveValue = "-250px";
//   } else if (activeIndex === 3) {
//     moveValue = "-720px";
//   } else if (activeIndex === 4) {
//     moveValue = "-2000px";
//   } else if (activeIndex === 5) {
//     moveValue = "-2000px";
//   }

//   return {
//     position: "fixed",
//     top: moveValue,
//     left: "75%",
//     transform: "translateX(-50%)",
//     transition: "top 0.6s ease-out",
//     zIndex: -1,
//     pointerEvents: "none",
//   };
// }

// export function earthStyles(earthOffset, isHeroListVisible) {
//   return {
//     position: "fixed",
//     top: `${50 - earthOffset}px`,
//     left: "85%",
//     transform: "translateX(-50%)",
//     transition: "top 0.6s ease-out",
//     zIndex: -1,
//     pointerEvents: "none",
//   };
// }

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
