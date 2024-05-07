"use client";

import { ProjectProps } from "@/interfaces";
// import { StarIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { ReactElement } from "react";
 


export default function Project({
  id,
  image,
  name,
  description,
  tags,
}: ProjectProps): ReactElement {

  return (
    <Link
      href={`project/${id}`}
      className="md:w-5/12 lg:w-1/3 xl:w-1/4 m-2 bg-gray-900 border border-gray-800 rounded-lg hover:bg-gray-800 transform transition duration-300 hover:-translate-y-2 shadow-lg shadow-gray-900"
    >
      <div className="flex flex-col justify-between h-full">
        <div className="flex flex-row p-4 items-center">
          <img className="w-12 h-12 rounded-lg" src={image} alt="" />
          <div className="flex flex-col pl-4">
            <h4 className="text-lg font-bold">{name}</h4>
            {/* <div className="flex items-center"> */}
            {/* <StarIcon className="w-4 h-4 text-yellow-300 me-1" /> */}

            {/* <p className="text-sm font-bold text-white">4.95</p> */}
            {/* </div> */}
          </div>
        </div>
        <p className="p-4 pt-2 font-normal text-white">{description}</p>
        <div className="flex p-4 flex-wrap">
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
    </Link>
  );
}
