import React from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore"; 
import useGetCourseList from "../hooks/useGetCourseList";
import CardsShimmer from "../components/CardsShimmer";

const Home = () => {

  const courses = useGetCourseList();
  // console.log("Home page ",courses)

  if(!courses){
    return <CardsShimmer/>
  }

  return (
    <div className="">
      <h1 className="px-10 py-10 text-xl font-semibold">
        Expand your <span className="text-orange-500 font-bold">Career</span> opportunities with <span className="text-orange-500 font-bold">Skills</span> 🚀
      </h1>
      <div className="flex flex-wrap  gap-5 justify-evenly items-center px-5 lg:px-0 ">
        {courses?.map((item) => (
          <Link
            key={item.id}
            className="w-[96%] md:w-60"
            to={`/description/${item.id}`}
            id={item}
          >
            <CourseCard data={item}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
