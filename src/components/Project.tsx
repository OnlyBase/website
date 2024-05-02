"use client";

import { ProjectProps } from "@/interfaces";
import Link from "next/link";
import { ReactElement } from "react";

export default function Project({
  image,
  name,
  description,
  tags,
  website,
}: ProjectProps): ReactElement {
  return (
    <Link href={website} target="_blank">
      <button
        type="button"
        className="transform transition duration-300  hover:translate-y-2 bg-transparent overflow-hidden shadow-lg shadow-gray-900 w-80 m-4 border border-gray-800"
      >
        <img alt="Placeholder" className="h-48 w-full" src={image} />

        <div className="z-50 bg-gray-900 hover:bg-gray-800 h-full relative -mt-2 p-4">
          <header className="leading-tight mb-2">
            <h1 className="text-lg font-bold no-underline hover:underline text-gray-50">
              {name}
            </h1>
          </header>

          <p className="leading-tight pb-2 md:pb-4">{description}</p>
          <div className="py-4 flex justify-around flex-wrap">
            {tags &&
              tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-block bg-gray-300 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700"
                >
                  {tag}
                </span>
              ))}
          </div>
        </div>
      </button>
    </Link>
  );
}
