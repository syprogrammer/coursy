import React, { useEffect, useState } from "react";
import CourseCard from "../components/CourseCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../redux/slices/user";
import signOutUser from "../utils/logout";
import toast, { Toaster } from "react-hot-toast";
import useGetEnrolledCourses from "../hooks/useGetEnrolledCourses";
import markCourseComplete from "../utils/courseComplete";

const notify = () => toast("✔️ signed Out  successfully");

const Dashboard = () => {
  const [enrolledCourses, setEnrolledCourses] = useState(null);
  const user = useSelector((store) => store.userState.user);
  const { courseDetailsArray, enrollDetails } = useGetEnrolledCourses(user.uid);
  
  console.log("enrollDetails=>", enrollDetails);
  
  if (!enrolledCourses) {
    Promise.allSettled(courseDetailsArray).then((res) => {
      console.log("Dashboard page=> ", res);
      setEnrolledCourses(res);
    });
  }

  useEffect(() => {}, []);
  console.log(enrolledCourses);
  const dispatch = useDispatch();
  const signout = () => {
    dispatch(removeUser());
    signOutUser();
    notify();
  };

  if (!enrolledCourses) {
    return <p>Loading...</p>;
  }

  console.log("from dashboard", enrolledCourses);
  return (
    <div className="p-6">
      <Toaster />

      <button
        onClick={signout}
        className="w-fit bg-black text-white px-5 py-2 rounded-md m-4"
      >
        Signout
      </button>

      <h2 className="text-xl font-bold m-4">Course you have Enrolled </h2>
      <div className="flex flex-wrap  gap-4 justify-evenly">
        {enrolledCourses?.map((item) => (
          <div key={item?.value?.id} className="w-full md:w-64">
            <Link to={`/description/${item?.value?.id}`}>
              <CourseCard data={item.value} />
            </Link>
            {enrollDetails.map(
              (enroll) =>
                enroll.courseid == item.value.id &&
                (enroll.progress == "ongoing" ? (
                  <button
                  onClick={()=>markCourseComplete(enroll.enrollid)}
                   className="bg-green-500 p-1 rounded-md">
                    Mark as Complete
                  </button>
                ) : (
                  <button className="bg-cyan-700 p-1 rounded-md">
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
