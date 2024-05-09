import { MoonLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex mb-20 w-full h-screen  rounded-lg">
      <div className="flex justify-center items-center w-full m-10">
        <MoonLoader color="#333" />
      </div>
    </div>
  );
}
