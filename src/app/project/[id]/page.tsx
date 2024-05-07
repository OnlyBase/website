"use client";
import { projects } from "@/data";
import { useParams } from "next/navigation";
import slugify from "slugify";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));

  console.log(id, project);
  return (
    <div className="flex flex-wrap justify-center mb-20 w-full h-screen bg-gray-900 rounded-lg">
      <h1>hi</h1>
    </div>
  );
}
