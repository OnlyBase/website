"use client";

import { ProjectContainer } from "@/components/ProjectContainer";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <ProjectContainer />
    </Suspense>
  );
}
