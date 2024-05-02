import React from "react";

export default function SearchBar() {
  return (
    <div className="relative flex">
      <input
        type="search"
        className="relative m-0 block w-96 flex-auto rounded-3xl bg-gray-900 bg-clip-padding px-3 py-[0.5rem] text-base font-normal leading-[1.6] text-surface outline-none transition duration-200 ease-in-out placeholder:text-neutral-500 focus:z-[3] focus:border-primary focus:shadow-inset focus:outline-none motion-reduce:transition-none dark:border-white/10 dark:text-white dark:placeholder:text-neutral-200 dark:autofill:shadow-autofill dark:focus:border-primary"
        placeholder="SEARCH BASE"
        aria-label="Search"
        id="exampleFormControlInput2"
        aria-describedby="button-addon2"
      />
      <span
        className="flex items-center whitespace-nowrap px-3 py-[0.25rem] text-surface dark:border-neutral-400 dark:text-white [&>svg]:h-5 [&>svg]:w-5"
        id="button-addon2"
      ></span>
    </div>
  );
}
