import React from "react";

function RedDecorationElement({ isHeroListVisible, activeIndex }) {
  let moveValue = "100px";
  let rotate = "-112.472";
  let bottom = "-800px";
  let left = "-46px";
  let opacity = "1";

  if (isHeroListVisible && activeIndex === 0) {
    rotate = "-64";
    bottom = "-800px";
    left = "-46px";
  } else if (activeIndex === 1) {
    opacity = "0.7";
    bottom = "-595px";
    left = "495px";
    rotate = "-84.677";
  } else if (activeIndex === 2) {
    opacity = "0.7";
    bottom = "-595px";
    left = "495px";
    rotate = "-84.677";
  } else if (activeIndex === 3) {
    opacity = "0.5";
    bottom = "540px";
    left = "111px";
    rotate = "-34.677";
  } else if (activeIndex === 4) {
    opacity = "0";
    bottom = "540px";
    left = "111px";
    rotate = "-34.677";
  } else if (activeIndex === 5) {
    moveValue = "-100vw";
    opacity = "0";
    rotate = "-160";
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
      }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1168"
        height="837"
        viewBox="0 0 1168 837"
        fill="none">
        <g filter="url(#filter0_f_352_6490)">
          <path
            d="M568.09 619.365C530.631 782.576 318.608 868.115 189.734 637.352C60.8602 406.589 350.964 204.342 470.825 258.651C590.686 312.96 699.632 125.047 837.424 235.787C963.4 337.031 1046.33 603.841 850.796 584.669C690.066 568.909 605.549 456.153 568.09 619.365Z"
            fill="url(#paint0_linear_352_6490)"
            fill-opacity="0.2"
          />
        </g>
        <defs>
          <filter
            id="filter0_f_352_6490"
            x="-42.5889"
            y="0.175293"
            width="1209.88"
            height="978.41"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feGaussianBlur
              stdDeviation="100"
              result="effect1_foregroundBlur_352_6490"
            />
          </filter>
          <linearGradient
            id="paint0_linear_352_6490"
            x1="114.183"
            y1="605.203"
            x2="758.088"
            y2="196.209"
            gradientUnits="userSpaceOnUse">
            <stop stop-color="#FC6F32" />
            <stop offset="1" stop-color="#FF4A59" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default RedDecorationElement;
