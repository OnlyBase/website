"use client";

import { ReactElement, useState } from "react";


export default function Card({
  imageUrl,
  title,
  description
}: {
  imageUrl: string | undefined;
  title?: string,
  description: string
}): ReactElement {


  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/12 p-4 bg-gray-900 rounded-2xl border border-gray-800 m-5 ">
    <div className="overflow-hidden ">
      <img src={imageUrl} alt={title} className="w-full h-60 object-cover object-center rounded-2xl" />
      <div className="p-4">
        <h2 className="text-white font-bold text-4xl">{title}</h2>
        <p className="text-gray-300 font-light text-lg pt-4">{description}</p>
      </div>
    </div>
  </div>



  );
}
