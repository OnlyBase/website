"use client";

import { Widget } from "@typeform/embed-react";

export default function NewProject() {
  return (
    <Widget
      id="m1SSyCyo"
      style={{ width: "100%", height: "80vh", marginTop: 14 }}
      className="-mt-10"
    />
    // <div className="flex flex-wrap items-center justify-center shadow-lg rounded-lg py-10">
    //   <h3 className="mb-5 text-lg font-medium text-white">
    //     Choose your option:
    //   </h3>
    //   <ul className="grid w-full gap-6 md:grid-cols-2">
    //     {OPTIONS.map((option) => (
    //       <li key={option.id} className="m-5">
    //         <input
    //           type="checkbox"
    //           id="react-option"
    //           value=""
    //           className="hidden peer"
    //           required
    //         />
    //         <Link href={option.route}>
    //           <label
    //             htmlFor="react-option"
    //             className="transform transition duration-300 hover:-translate-y-2 shadow-lg inline-flex items-center justify-between w-full p-5 text-gray-500 bg-gray-900 border border-gray-800 rounded-lg cursor-pointer peer-checked:border-blue-600 hover:bg-gray-800 "
    //           >
    //             <div className="block text-white">
    //               <option.icon className="mb-2 w-7 h-7 text-green-400" />

    //               <div className="w-full text-lg font-semibol">
    //                 {option.title}
    //               </div>
    //               <div className="w-full text-sm">{option.description}</div>
    //             </div>
    //           </label>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>

    //   {/* <PaymentCard type="plan" />
    //   <PaymentCard type="free" /> */}
    // </div>
  );
}
