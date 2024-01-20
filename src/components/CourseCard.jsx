import React from "react";

const CourseCard = ({ data }) => {
  let price=4560
  return (
    <div className="course-card-container rounded-md w-full shadow-md">
      <div>
        <img src={data?.thumbnail} alt="" loading="lazy" className="w-full" />
      </div>
      <div className="course-info p-2">
        <h3 className="font-semibold break-words">
          {data?.name?.slice(0, 40)}
          {data?.name?.length > 40 && "..."}
        </h3>
        <span className="text-xs">{data?.instructor}</span>
        <div className="flex items-center gap-2 text-sm py-1">
          <span className="text-black font-bold">4.8</span>
          <img src="/stars.png" className="h-4" />
          <span className="text-gray-500 ">(45433)</span>
        </div>
        <div className="flex flex-col gap-2">
          <span className="font-bold">
        
            ₹{price?.toLocaleString("en-IN")}
          </span>
          <button className="w-fit bg-yellow-200 text-xs px-2  font-semibold leading-5">
            Bestseller
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
