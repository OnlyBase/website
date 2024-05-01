"use client";

import { ProjectProps } from "@/interfaces";
import { ReactElement, useState } from "react";


export default function Project({ image, name, description}: ProjectProps ): ReactElement {


  return (

<div className="bg-gray-800 border-gray-600 border rounded-xl shadow-sm mx-5 my-10 sm:flex w-full sm:w-1/2 md:w-5/12 lg:w-5/12 p-2">
  <div className="flex-shrink-0 relative w-full rounded-t-xl overflow-hidden pt-[40%] sm:rounded-s-xl sm:max-w-60 md:rounded-se-none md:max-w-xs">
    <img className="size-full absolute top-0 start-0 object-cover" src={image} alt="Image Description"/>
  </div>
  <div className="flex flex-wrap">
    <div className="p-4 flex flex-col h-full sm:p-7">
      <h3 className="text-lg font-bold text-white">
        {name}
      </h3>
      <p className="mt-1 text-gray-50">
        {description}
      </p>
      <div className="mt-5 sm:mt-auto">
        <p className="text-xs text-gray-50">
          Last updated 5 mins ago
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
