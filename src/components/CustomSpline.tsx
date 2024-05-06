"use client";

import Spline from "@splinetool/react-spline";

export default function CustomSpline() {
  const BackgroundSpline = () => (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
    >
    <Spline scene="https://prod.spline.design/3RR-x1MjQUxFLtHA/scene.splinecode" />
    </div>
  );

  return <BackgroundSpline />;
}
