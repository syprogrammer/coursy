import React from "react";

const CourseRequirement = ({ data }) => {
  return (
    <div className="mx-5">
      <h2 className="py-4 text-xl font-bold">Prerequisites</h2>
      <div className="flex flex-col p-5">
        {data?.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </div>
    </div>
  );
};

export default CourseRequirement;
