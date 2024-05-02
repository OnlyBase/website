"use client";

import { useContext, useEffect, useId, useState } from "react";

import Project from "./Project";
import { AppContext } from "@/Context/AppContext";
import { useSearchParams } from "next/navigation";
import { ProjectProps } from "@/interfaces";

export const ProjectContainer = () => {
  const { projectsData, setProjectsData } = useContext(AppContext);
  const [originalProjectsData] = useState<ProjectProps[]>(projectsData);

  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  useEffect(() => {
    if (categoryParam) {
      const filteredData = originalProjectsData.filter((project) =>
        project.tags.find((value) => value === categoryParam)
      );
      setProjectsData(filteredData);
    } else {
      setProjectsData(originalProjectsData);
    }
  }, [categoryParam]);

  const key = useId();
  return (
    <>
      <h1 className="text-center text-4xl font-extrabold">Projects</h1>
      <div className="flex flex-wrap justify-center mt-10 mb-20 w-full">
        {projectsData.map((item) => (
          <Project key={key} {...item} />
        ))}
      </div>
    </>
  );
};
