import { collection, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import useGetStudents from "../hooks/useGetStudents";

const CourseEnroll = ({ courseid }) => {
  const [processing, setProcessing] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const user = useSelector((store) => store.userState.user);
  const enrolledStudents = useGetStudents(courseid);

  const hasUserid = (arr, uid) => {
    const enrolledin = arr.filter((item) => item.userid == uid);
    if (enrolledin.length > 0) {
      return true;
    }
    return false;
  };

  useEffect(() => {

    if (user?.uid && enrolledStudents) {
      let res = hasUserid(enrolledStudents, user.uid);
      // console.log("enrolled=>",res)
      setEnrolled(res);
    }
  }, [user,enrolledStudents]);

  const enroll = async () => {
    // console.log("enroll called");
    setProcessing(true);
    try {
      const courseRef = doc(collection(db, "Enrollment"));
      await setDoc(courseRef, {
        userid: user.uid,
        progress: "ongoing",
        courseid: courseid,
        enrollid: courseRef.id,
      });
      setEnrolled(true);
      setProcessing(false);
    } catch (error) {
      console.log(error);
      setProcessing(false);
    }
  };
  if (enrolled) {
    return (
      <Link to="/dashboard">
        <button className="cursor-pointer  bg-orange-700 rounded-md  text-white w-full py-2 my-1 ">
          Go to Course
        </button>
      </Link>
    );
  }
  return (
    <div>
      {user ? (
        <button
          onClick={enroll}
          className="cursor-pointer rounded-md bg-orange-500 hover:bg-orange-400 text-white w-full py-2 my-1 "
        >
          {processing ? "Processing ..." : " Enroll in Course"}
        </button>
      ) : (
        <Link to="/signin">
          <button className="bg-orange-500 rounded-md text-white w-full py-2 my-1 ">
            Sign in to Enroll in Course
          </button>
        </Link>
      )}
    </div>
  );
};

export default CourseEnroll;
