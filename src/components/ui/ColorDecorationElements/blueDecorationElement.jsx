import React from "react";

function BlueDecorationElement({ isHeroListVisible, activeIndex }) {
  let rotate = "-112.472";
  let bottom = "300px";
  let left = "24px";
  let opacity = "1";

  if (activeIndex === 1) {
    rotate = "-82";
    bottom = "300px";
    left = "60px";
    opacity = "1";
  } else if (activeIndex === 2) {
    rotate = "-94";
    bottom = "300px";
    left = "170px";
    opacity = "0.8";
  } else if (activeIndex === 3) {
    rotate = "-94";
    bottom = "300px";
    left = "170px";
    opacity = "0.8";
  } else if (activeIndex === 4) {
    rotate = "-94";
    bottom = "300px";
    left = "170px";
    opacity = "0";
  } else if (activeIndex === 5) {
    opacity = "0";
  } else if (activeIndex === 6) {
    opacity = "0";
  }
  return (
    <div
      style={{
        width: "504.808px",
        height: "795.74px",
        bottom: bottom,
        left: left,
        opacity: opacity,
        transform: `rotate(${rotate}deg)`,
        transition:
          "bottom 0.6s ease-out, left 0.7s ease-out, transform 0.7s ease-out, opacity 0.7s ease-out",
        flexShrink: "0",
        position: "absolute",
        willChange: "transform",
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1196"
        height="1045"
        viewBox="0 0 1196 1045"
        fill="none">
        <g filter="url(#filter0_f_352_6491)">
          <path
            d="M627.691 648.792C623.657 816.198 433.046 942.443 260.592 742.144C88.1374 541.846 331.891 285.626 460.196 314.845C588.501 344.064 657.632 138.148 814.801 219.068C958.491 293.048 1093.14 537.862 897.731 558.214C737.1 574.943 631.724 481.385 627.691 648.792Z"
            fill="url(#paint0_linear_352_6491)"
            fillOpacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_352_6491"
            x="0.966797"
            y="0.0942383"
            width="1194.46"
            height="1044.74"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_352_6491"
            />
          </filter>
          <linearGradient
            id="paint0_linear_352_6491"
            x1="159.365"
            y1="937.15"
            x2="688.708"
            y2="200.003"
            gradientUnits="userSpaceOnUse">
            <stop stopColor="#32BFFC" />
            <stop offset="1" stopColor="#005577" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default BlueDecorationElement;
