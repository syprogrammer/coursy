import React from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore"; 
import useGetCourseList from "../hooks/useGetCourseList";
import CardsShimmer from "../components/CardsShimmer";

const Home = () => {

  const courses = useGetCourseList();
  console.log("Home page ",courses)

  if(!courses){
    return <CardsShimmer/>
  }

  return (
    <div className="p-4">
      <h1 className="py-6 text-2xl font-bold">
        Expand your career opportunities with Skills
      </h1>
      <div className="flex flex-wrap  gap-4 justify-evenly">
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
