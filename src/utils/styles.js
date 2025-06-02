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

export function moonStyles(activeIndex, slidesCount) {
  return {
    position: "fixed",
    bottom: activeIndex === slidesCount - 1 ? "450px" : "-200px",
    opacity: activeIndex === slidesCount - 1 ? 1 : 0,
    left: "85%",
    transform: "translateX(-50%)",
    transition: "bottom 1.2s ease-out, opacity 0.3s ease-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}

export function earthStyles(earthOffset) {
  return {
    position: "fixed",
    top: `${50 - earthOffset}px`,
    left: "85%",
    transform: "translateX(-50%)",
    transition: "top 0.6s ease-out",
    zIndex: -1,
    pointerEvents: "none",
  };
}
