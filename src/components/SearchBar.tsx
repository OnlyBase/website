"use client";
import { AppContext } from "@/Context/AppContext";
import { ProjectProps } from "@/interfaces";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { ChangeEvent, useContext, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { projects } from "@/data";

export default function SearchBar({
  isMobile = false,
}: {
  isMobile?: boolean;
}) {
  const context = useContext(AppContext);
  if (!context) {
    return false;
  }
  const { setProjectsData } = context;
  const [originalProjectsData] = useState<ProjectProps[]>(projects);
  const router = useRouter();
  const path = usePathname();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    if (searchText !== "") {
      const newProjects = originalProjectsData.filter(
        (project) =>
          project.name?.toLowerCase().includes(searchText) ||
          project.tags.find((value) => value.includes(searchText)) ||
          project.description?.toLowerCase().includes(searchText) ||
          project.website?.toLowerCase().includes(searchText) ||
          project.twitter?.toLowerCase().includes(searchText) ||
          project.smartContractAddress?.toLowerCase().includes(searchText)
      );
      setProjectsData(newProjects);
    } else {
      setProjectsData(originalProjectsData);
    }
    if (path != "/") router.push("/");
  };

  return (
    <div
      className={`relative ${
        isMobile ? "block md:hidden mb-4" : "hidden md:block"
      } mx-2 `}
    >
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
        <FaMagnifyingGlass className="w-3 h-3 text-gray-500" />
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        id="search-navbar"
        className="block w-full p-2 ps-10 text-sm text-white-100 border border-gray-700 rounded-lg shadow-lg bg-gray-800 shadow-gray-800 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search..."
      />
    </div>
  );
}
