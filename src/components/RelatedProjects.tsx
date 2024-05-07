import { ProjectProps } from "@/interfaces";
import Link from "next/link";

export default function RelatedProjects({
  relatedProjects,
}: {
  relatedProjects: ProjectProps[];
}) {
  return (
    <div id="related" data-accordion="open" className="mb-6">
      <h2 id="accordion-arrow-icon-heading-1">
        <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-600 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3">
          <span>Related Apps</span>
        </div>
      </h2>
      <div
        id="accordion-arrow-icon-body-1"
        aria-labelledby="accordion-arrow-icon-heading-1"
      >
        <div className="p-5 border rounded-b-lg border-gray-600">
          {relatedProjects.map((relatedProject) => (
            <div className="flex flex-row mb-8" key={relatedProject.id}>
              <img
                alt={relatedProject.name}
                src={relatedProject.image}
                className="w-12 h-12 rounded"
              />
              <div className="flex flex-col ml-4">
                <p className="text-lg font-bold">{relatedProject.name}</p>
                <p className="py-2 text-sm">{relatedProject.description}</p>
                <Link href={relatedProject.website} className="font-bold">
                  Show more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
