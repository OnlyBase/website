"use client";
import SearchBar from "./SearchBar";
import Link from "next/link";
import { RowsIcon } from "@radix-ui/react-icons";
import CoinBaseButton from "./CoinBaseButton";

export default function Navbar({ toggleMenu }: { toggleMenu: () => void }) {
  return (
    <nav className="fixed top-0 z-50 w-full bg-gray-900 border-gray-800 border">
      <div className="px-3 py-2 lg:px-5 lg:pl-3 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start rtl:justify-end">
            <button
              onClick={toggleMenu}
              data-drawer-target="logo-sidebar"
              data-drawer-toggle="logo-sidebar"
              aria-controls="logo-sidebar"
              type="button"
              className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open sidebar</span>
              <RowsIcon className="w-4 h-4" />
            </button>
            <Link href="/" className="flex ms-2 md:me-24">
              <img
                src="/logo.png"
                className="h-8 me-3"
                alt="Only Base Logo"
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                Only Base
              </span>
            </Link>
          </div>
          <SearchBar />
          <CoinBaseButton />
        </div>
      </div>
    </nav>
  );
}
