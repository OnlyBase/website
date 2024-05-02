"use client";

import { ProjectProps } from "@/interfaces";
import { ReactElement, useState } from "react";

export default function Project({
  image,
  name,
  description,
  tags,
}: ProjectProps): ReactElement {
  return (
    <button
      type="button"
      className="transform rounded-lg  transition duration-300  hover:translate-y-2 bg-transparent overflow-hidden shadow-lg shadow-gray-800 w-80 m-4 border border-gray-800"
    >
      <a className="" href="#">
        <img alt="Placeholder" className="h-48 w-full" src={image} />
      </a>

      <div className="rounded-lg z-50 bg-gray-900 hover:bg-black h-full relative -mt-2 p-4">
        <header className="leading-tight mb-2">
          <h1 className="text-lg font-bold">
            <a className="no-underline hover:underline text-gray-50" href="#">
              {name}
            </a>
          </h1>
        </header>

        <p className="leading-tight pb-2 md:pb-4">{description}</p>
        <div className="py-4 flex justify-around flex-wrap">
          {tags &&
            tags.map((tag) => (
              <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700">
                {tag}
              </span>
            ))}
        </div>
      </div>
    </button>
  );
}
