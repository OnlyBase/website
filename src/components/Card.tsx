"use client";

import { ReactElement, useState } from "react";

export default function Card({
  imageUrl,
  title,
  description,
}: {
  imageUrl: string | undefined;
  title?: string;
  description: string;
}): ReactElement {
  return (
    <button type="button" className=" transform transition duration-300 hover:scale-105 bg-transparent overflow-hidden rounded-3xl shadow-lg shadow-gray-800 lg:w-4/12 m-4 border border-gray-800">
      {/* <a className="flex items-center justify-center" href="#">
        <img
          alt="Placeholder"
          className=" h-48 rounded-lg w-4/12 px-8 py-10"
          src={imageUrl}
        />
      </a> */}

      <div className="rounded-3xl z-50 bg-gray-900 hover:bg-black h-full relative -mt-2 p-4">
        <header className="leading-tight mb-2">
          <h1 className="text-lg font-bold">
            <a className="no-underline text-gray-50" href="#">
              {title}
            </a>
          </h1>
        </header>

        <p className="leading-tight pb-2 md:pb-4">
          {description}
        </p>
        {/* <div className="py-4 flex justify-around flex-wrap">
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700">
            #didacticode
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700">
            #hackathon
          </span>
          <span className="inline-block bg-gray-300 rounded-full px-3 py-1 mb-1 text-sm font-semibold text-gray-700">
            #desprogramadas
          </span>
        </div> */}
      </div>
    </button>

    //   <div className="w-full sm:w-1/2 md:w-1/3 lg:w-4/12 p-4 bg-gray-900 rounded-2xl border border-gray-800 m-5 ">
    //   <div className="overflow-hidden ">
    //     <img src={imageUrl} alt={title} className="w-full h-60 object-cover object-center rounded-2xl" />
    //     <div className="p-4">
    //       <h2 className="text-white font-bold text-4xl">{title}</h2>
    //       <p className="text-gray-300 font-light text-lg pt-4">{description}</p>
    //     </div>
    //   </div>
    // </div>
  );
}
