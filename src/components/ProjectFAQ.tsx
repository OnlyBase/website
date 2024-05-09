import { ProjectProps } from "@/interfaces";
import { FaChevronDown } from "react-icons/fa6";
import { useState } from "react";

export default function ProjectFAQ({ project }: { project: ProjectProps }) {
  const [faqOpen, setFaqOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(index === activeIndex ? null : index);
    setFaqOpen(!faqOpen);
  };

  return (
    <section id="faq" data-accordion="open" className="mb-6">
      <h2 id="accordion-arrow-icon-heading-1">
        <div className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white border border-b-0 border-gray-600 rounded-t-xl focus:ring-4 focus:ring-gray-200 gap-3">
          <span>Frequently Asked Questions</span>
        </div>
      </h2>
      <div
        id="accordion-arrow-icon-body-1"
        aria-labelledby="accordion-arrow-icon-heading-1"
      >
        <div className="p-5 border rounded-b-lg border-gray-600">
          {project.faq &&
            project.faq.map((faq, index) => (
              <div
                id={`accordion-collapse-${index}`}
                data-accordion="collapse"
                key={faq.title}
              >
                <h2 id={`accordion-collapse-heading-${index}`}>
                  <button
                    type="button"
                    className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-white rounded-t-xl focus:ring-4 gap-3"
                    data-accordion-target={`#accordion-collapse-body-${index}`}
                    aria-expanded={activeIndex === index ? "true" : "false"}
                    aria-controls={`accordion-collapse-body-${index}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <span className="text-base">{faq.title}</span>
                    <FaChevronDown
                      className={`w-10 ${
                        activeIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                </h2>
                <div
                  id={`accordion-collapse-body-${index}`}
                  className={`${activeIndex === index ? "block" : "hidden"}`}
                  aria-labelledby={`accordion-collapse-heading-${index}`}
                >
                  <div className="p-5 text-white text-sm">
                    <div className="mb-2">
                      <p>{faq.content}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
