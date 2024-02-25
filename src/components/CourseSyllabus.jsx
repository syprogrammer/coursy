import React from "react";
import DropDown from "./DropDown";

const CourseSyllabus = ({syllabus}) => {
 
  return (
    <div className="my-4">
      <h2 className="py-4 text-xl font-bold">Course Content</h2>
      <div className="">
        {syllabus?.map((data) => {
          return <DropDown key={data.week} data={data} />;
        })}
      </div>
    </div>
  );
};

export default CourseSyllabus;
