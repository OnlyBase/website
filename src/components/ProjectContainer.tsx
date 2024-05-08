import { JSX, useContext, useEffect, useState } from "react";

import Project from "./Project";
import { AppContext } from "@/Context/AppContext";
import { useSearchParams } from "next/navigation";
import { ProjectProps } from "@/interfaces";

export const ProjectContainer = () => {
  const context = useContext(AppContext);
  if (!context) {
    return false;
  }
  const { projectsData, setProjectsData } = context;
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

  return (
    <div className="flex flex-wrap justify-center mb-20 w-full">
      {projectsData.map((item: JSX.IntrinsicAttributes & ProjectProps) => (
        <Project key={item.id} {...item} />
      ))}
    </div>
  );
};
