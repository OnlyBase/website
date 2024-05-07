"use client";
import ProjectDetailHeader from "@/components/ProjectDetailHeader";
import ProjectFAQ from "@/components/ProjectFAQ";
import ProjectOverview from "@/components/ProjectOverview";
import RelatedProjects from "@/components/RelatedProjects";
import { ProjectDetailContainer } from "@/containers/ProjectDetailContainer";
import { projects } from "@/data";
import { ProjectProps } from "@/interfaces";

import { useParams, notFound } from "next/navigation";
import { useEffect } from "react";

export default function ProjectDetail() {
  const { id } = useParams();

  const project: ProjectProps = projects.find(
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
  // console.log(id, project, relatedProjects, faqVisibility);
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
        </>
      )}
    </ProjectDetailContainer>
  );
}
