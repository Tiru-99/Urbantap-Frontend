import * as React from "react";

const SVGComponent = () => (
  <svg
    width={1440}
    height={850}
    viewBox="0 0 1440 850"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <rect x={-109} y={-11} width={1707} height={873} fill="url(#pattern0_405_2447)" />
    <defs>
      <pattern id="pattern0_405_2447" patternContentUnits="objectBoundingBox" width={1} height={1}>
        <use
          xlinkHref="#image0_405_2447"
          transform="matrix(0.00030226 0 0 0.000591017 -0.0168642 0)"
        />
      </pattern>
      <image
        id="image0_405_2447"
        width={3420}
        height={1692}
      />
    </defs>
  </svg>
);

export default function Hero() {
  return (
    <div className="h-[850px] bg-white">
      <SVGComponent />
    </div>
  );
}