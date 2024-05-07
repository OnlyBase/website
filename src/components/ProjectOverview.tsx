export default function ProjectOverview({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <section id="overview" data-accordion="open" className="mb-6">
      <h2 id="accordion-arrow-icon-heading-1">
        <div className="flex items-center justify-between w-full p-5 font-medium text-white border border-b-0 border-gray-600 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3">
          <span>{title} Overview</span>
        </div>
      </h2>
      <div
        id="accordion-arrow-icon-body-1"
        aria-labelledby="accordion-arrow-icon-heading-1"
        aria-expanded="true"
      >
        <article className="p-5 border rounded-b-lg border-gray-600">
          <p className="mb-2 text-white">{description}</p>
        </article>
      </div>
    </section>
  );
}
