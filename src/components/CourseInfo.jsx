import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LikeCourse from "../utils/likeCourse";

const CourseInfo = ({ data }) => {
  const user = useSelector((store) => store.userState.user);
  const [processing, setProcessing] = useState(false);
  const [likes, setLikes] = useState(data.likes);

  const like = async (id) => {
    try {
      setProcessing(true);
      const res = await LikeCourse(id, [...likes, user.uid]);
      // console.log("res is =>", res, [...likes, user.uid]);
      if (res) {
        setLikes([...likes, user.uid]);
      }
      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };

  
  
  return (
    <div className="bg-black rounded-md shadow-md text-white p-5 flex flex-row-reverse flex-wrap justify-center gap-5">
      <div className="w-full md:w-1/3">
        <img src={data?.thumbnail} alt="" loading="lazy" className="w-full" />
      </div>
      <div className="w-full md:w-[50%] flex flex-col gap-3">
        <h2 className="text-3xl font-bold">{data?.name}</h2>
        <h3 className="text-xl ">{data?.description}</h3>
        <div className="flex items-center gap-2 text-sm py-1">
          <span className="text-yellow-700 font-bold">4.8</span>
          <img src="/stars.png" className="h-4" />
          <span className=" ">45433 Students</span>
        </div>
        <div>
          <span>Created by </span>
          <Link to="#" className="text-purple-300">
            {data?.instructor}
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <span>Schedule: {data?.schedule} </span>
          <span>EnrollmentStatus: {data?.enrollmentStatus}</span>
          <span>Location: {data?.location}</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white text-black w-fit px-5 py-2 rounded-md">
            👍 Likes :{likes.length}
          </div>
          {user?.uid && !likes.includes(user.uid) &&(
            <button
              onClick={() => like(data?.id)}
              className="bg-green-500 w-fit px-5 py-2 rounded-md"
            >
              {processing ? "Processing " : "Like the Course"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseInfo;
