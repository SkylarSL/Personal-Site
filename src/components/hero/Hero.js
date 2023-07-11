import React, { useState, useEffect } from "react";

export const Hero = () => {
  const [drawPath, setDrawPath] = useState("outline-off");
  const [heroAnim, setHeroAnim] = useState("hero-container-on");

  useEffect(() => {
    setDrawPath("outline-on");
    setTimeout(() => {
      setHeroAnim("hero-container-off");
    }, 5200);
  }, []);

  return (
    <div className="hero-outer-container">
      <div className={`${heroAnim}`}>
        <svg
          width="1000"
          height="150"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text
            className="initials-s-one"
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="450"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            S
          </text>
          <text
            className={`first-name ${drawPath}`}
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="268"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            kylar
          </text>
          <text
            className="initials-s-two"
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="500"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            S
          </text>
          <text
            className={`middle-name ${drawPath}`}
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="532"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            amson
          </text>
          <text
            className="initials-l"
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="550"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            L
          </text>
          <text
            className={`last-name ${drawPath}`}
            textAnchor="middle"
            fontSize="75"
            id="svg_1"
            y="75"
            x="784"
            strokeWidth="1"
            stroke="#000000"
            fill="#000000"
          >
            iang
          </text>
        </svg>
      </div>

      <svg
        width="1000"
        height="150"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <text
          className="path"
          textAnchor="middle"
          fontSize="75"
          id="svg_1"
          y="75"
          x="500"
          strokeWidth="1"
          stroke="#000000"
          fill="#000000"
        >
          Hello! Scroll for more.
        </text>
      </svg>
    </div>
  );
};
