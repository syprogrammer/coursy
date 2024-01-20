import React from "react";
import CourseInfo from "../components/CourseInfo";
import CourseSyllabus from "../components/CourseSyllabus";
import CourseRequirement from "../components/CourseRequirement";
import { Link, useParams } from "react-router-dom";
import useGetCourseDetails from "../hooks/useGetCourseDetails";
import CourseEnroll from "../components/CourseEnroll";
import CardsShimmer from "../components/CardsShimmer";

const Description = () => {
  const { id } = useParams();
  const courseDetails = useGetCourseDetails(id);

  if (!courseDetails) {
     return <CardsShimmer/>
  }

  return (
    <div>
   <CourseInfo data={courseDetails} />
      <CourseEnroll courseid={id}/>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <CourseSyllabus syllabus={courseDetails?.syllabus} />
        </div>
        <CourseRequirement data={courseDetails?.prerequistes} />
      </div>
    </div>
  );
};

export default Description;
