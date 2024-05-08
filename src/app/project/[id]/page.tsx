"use client";
import ProjectDetailHeader from "@/components/ProjectDetailHeader";
import ProjectFAQ from "@/components/ProjectFAQ";
import ProjectOverview from "@/components/ProjectOverview";
// import ProjectTokenOverview from "@/components/ProjectTokenOverview";
import RelatedProjects from "@/components/RelatedProjects";
import { ProjectDetailContainer } from "@/containers/ProjectDetailContainer";
import { projects } from "@/data";

import { useParams, notFound } from "next/navigation";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();

  const project = projects.find(
    (project) => project.id === Number(id)
  );

  useEffect(() => {
    if (!project) {
      notFound();
    }
  }, []);

  const relatedProjects = project
    ? projects
        .filter(
          (p) =>
            p.id !== project.id &&
            p.tags.some((tag) => project.tags.includes(tag))
        )
        .slice(0, 3)
    : [];
  return (
    <ProjectDetailContainer>
      {project && (
        <>
          <ProjectDetailHeader project={project} />
          <ProjectOverview
            title={project.name}
            description={project.description}
          />
          <RelatedProjects relatedProjects={relatedProjects} />
          <ProjectFAQ project={project} />
          {/* <ProjectTokenOverview project={project} /> */}
        </>
      )}
    </ProjectDetailContainer>
  );
}
