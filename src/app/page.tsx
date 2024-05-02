'use client';

import Spline from "@splinetool/react-spline";
import { ProjectContainer } from "@/components/ProjectContainer";

export default async function Home() {
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
      <Spline scene="https://prod.spline.design/PAn5KY4vfxjM-Iz6/scene.splinecode" />
    </div>
  );

  return (
    <div>
      {/* <BackgroundSpline /> */}
      <ProjectContainer />
    </div>
  );
}
