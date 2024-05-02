"use client";
import { AppContext } from "@/Context/AppContext";
import { ProjectProps } from "@/interfaces";
import { ChangeEvent, useContext, useState } from "react";

export default function SearchBar() {
  const { projectsData, setProjectsData } = useContext(AppContext);
  const [originalProjectsData] = useState<ProjectProps[]>(projectsData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText !== "") {
      const newProjects = originalProjectsData.filter((project) =>
        project.name?.toLowerCase().includes(searchText)
      );
      setProjectsData(newProjects);
    } else {
      setProjectsData(originalProjectsData);
    }
  };

  return (
    <div className="relative hidden md:block -ml-12">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-700 rounded-lg shadow-lg bg-gray-800 shadow-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
}
