"use client";

import { categories } from "@/data";
import {
  HomeIcon,
  ListBulletIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import SearchBar from "./SearchBar";
import CoinBaseButton from "./CoinBaseButton";

export default function Sidebar({ isOpen }: { isOpen: boolean }) {
  const [isDropdownOpen, setisDropdownOpen] = useState(false);
  const searchParams = useSearchParams();
  const categoryParam = searchParams.get("category");

  const handleToggle = () => setisDropdownOpen(!isDropdownOpen);

  const OPTIONS = [
    {
      id: 1,
      name: "Home",
      icon: HomeIcon,
      route: "/",
    },
    {
      id: 2,
      name: "Add project",
      icon: PlusIcon,
      route: "/new-project",
    },
    {
      id: 3,
      name: "Categories",
      icon: ListBulletIcon,
      options: categories,
      route: null,
    },
  ];

  return (
    <aside
      id="logo-sidebar"
      className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-gray-900 border-r border-gray-800 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 ${
        !isOpen && "translate-x-0"
      }`}
      aria-label="Sidebar"
    >
      <SearchBar isMobile />
      <CoinBaseButton isMobile />
      <div className="h-full px-3 pb-4 overflow-y-auto bg-gray-900 dark:bg-gray-800">
        <ul className="space-y-2 font-medium">
          {OPTIONS.map((option) =>
            option.options ? (
              <li key={option.id}>
                <button
                  type="button"
                  className="flex items-center w-full p-2 text-base text-white transition duration-75 rounded-lg group hover:bg-gray-800"
                  aria-controls="dropdown-example"
                  data-collapse-toggle="dropdown-example"
                  onClick={handleToggle}
                >
                  <option.icon className="w-5 h-5" />
                  <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                    {option.name}
                  </span>
                  <ChevronDownIcon className="w-3 h-3" />
                </button>
                <ul
                  id="dropdown-example"
                  className={`${
                    isDropdownOpen ? "block" : "hidden"
                  } py-2 space-y-2`}
                >
                  {option.options.map((category) => (
                    <Link
                      href={`/?category=${category.title.toLowerCase()}`}
                      key={category.id}
                      className={`flex items-center w-full p-2 text-white transition duration-75 rounded-lg pl-11 group hover:bg-gray-800 ${
                        categoryParam === `${category.title.toLowerCase()}` &&
                        "bg-gray-800"
                      } `}
                    >
                      {category.title}
                    </Link>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={option.id}>
                <Link
                  href={option.route}
                  className={`flex items-center p-2 text-white rounded-lg hover:bg-gray-800 group`}
                >
                  <option.icon className="w-4 h-4" />
                  <span className="ms-3">{option.name}</span>
                </Link>
              </li>
            )
          )}
        </ul>
      </div>
    </aside>
  );
}
