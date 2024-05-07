import React from "react";

export const ProjectDetailContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className="flex mb-20 w-full h-full bg-gray-900 rounded-lg">
      <div className="flex flex-col w-full m-10">{children}</div>
    </div>
  );
};
