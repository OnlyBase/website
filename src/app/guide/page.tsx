"use client";

export default function Guide() {
  return (
    <div className="container mx-auto">
      <div
        id="accordion-color"
        data-accordion="collapse"
        data-active-classes="bg-blue-100 dark:bg-gray-800 text-blue-600 dark:text-white"
      >
        <h2 id="accordion-color-heading-1">
          <button
            type="button"
            className="bg-gray-900 flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-700 rounded-t-xl focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-800 dark:border-gray-700 dark:text-gray-400  dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-color-body-2"
            aria-expanded="false"
            aria-controls="accordion-color-body-2"
          >
            <span>How to Make a Pull Request on GitHub?</span>
            <svg
              data-accordion-icon
              className="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-color-body-1"
          aria-labelledby="accordion-color-heading-2"
        >
          <div className="p-5 border border-gray-700 dark:border-gray-700 dark:bg-gray-900">
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              To make a Pull Request on GitHub, follow these steps:
            </p>
            <ol className="list-decimal pl-5 text-gray-500 dark:text-gray-400">
              <li>Clone the repository to your local machine using Git.</li>
              <li>Create a new branch for your changes.</li>
              <li>Make your changes and commit them.</li>
              <li>Push your branch to the repository on GitHub.</li>
              <li>
                Go to the repository on GitHub and create a new Pull Request
                from your branch.
              </li>
              <li>Wait for reviewers to approve and merge your changes.</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
