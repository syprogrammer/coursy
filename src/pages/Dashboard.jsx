import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/user";
import signOutUser from "../utils/logout";
import useGetEnrolledCourses from "../hooks/useGetEnrolledCourses";
import markCourseComplete from "../utils/courseComplete";
import CardsShimmer from "../components/CardsShimmer";

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const user = useSelector((store) => store.userState.user);
  const { courseDetailsArray, enrollDetails } = useGetEnrolledCourses(user.uid);

  // console.log("enrollDetails=>", enrollDetails);

  if (!enrolledCourses) {
    Promise.allSettled(courseDetailsArray).then((res) => {
      // console.log("Dashboard page=> ", res);
      setEnrolledCourses(res);
    });
  }

  useEffect(() => {}, []);
  // console.log(enrolledCourses);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(removeUser());
    signOutUser();
    notify();
  };

  if (!enrolledCourses) {
    return <CardsShimmer />;
  }

  // console.log("from dashboard", enrolledCourses);
  return (
    <div className="px-5">
      <button
        onClick={signout}
        className="w-fit flex gap-2 items-center bg-orange-700 text-white px-5 py-1 py-2 rounded-md m-4"
      >
        <img src="/logouticon.png" className="w-4 lg:w-8" />
        <span className="text-xs lg:text-sm">Logout</span>
      </button>

      <h2 className="text-xl font-bold my-6">
        Courses you have <span className="text-orange-500">Enrolled</span>{" "}
      </h2>
      <div className="flex flex-wrap  gap-4 justify-evenly items-center">
        {enrolledCourses?.map((item) => (
          <div key={item?.value?.id} className="w-full  md:w-64">
            <Link to={`/description/${item?.value?.id}`}>
              <CourseCard data={item.value} />
            </Link>
            {enrollDetails.map(
              (enroll) =>
                enroll.courseid == item.value.id &&
                (enroll.progress == "ongoing" ? (
                  <button
                    onClick={() => markCourseComplete(enroll.enrollid)}
                    className="w-full bg-green-500 px-2 py-1 text-white rounded-b-md"
                  >
                    Mark as Complete
                  </button>
                ) : (
                  <button className="w-full bg-orange-500 px-2 py-1 text-white rounded-b-md">
                    Course Completed
                  </button>
                ))
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
