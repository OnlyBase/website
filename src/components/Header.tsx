"use client";

import { Suspense, useState, type FC } from "react";

import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export const Header: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu: () => void = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Suspense>
      <Navbar toggleMenu={toggleMenu} />
      <Sidebar isOpen={isMenuOpen} />
    </Suspense>
  );
};
