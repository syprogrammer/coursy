import React, { useEffect, useState } from "react";
import CardsShimmer from "../../components/CardsShimmer";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "../../firebase";
import CourseCard from "../../components/CourseCard";
import { Link } from "react-router-dom";

const AdminHome = () => {
  const [courses, setCourses] = useState(null);

  useEffect(() => {
    console.log("useffect called");
    getCourses();
  }, []);

  const getCourses = async () => {
    console.log("getcourses called");
    let result = [];
    const q = query(collection(db, "Courses"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
      result.push(doc.data());
    });

    setCourses(result);
  };
  console.log(courses);

  const handleDeleteCourse = async (id) => {
    console.log("handleDelete called");
    await deleteDoc(doc(db, "Courses", id));
    getCourses();
  };

  if (!courses) {
    return <CardsShimmer />;
  }

  return (
    <div className="">
      <div className="flex gap-10 px-10 py-10 text-xl font-semibold">
      <h1 className="">
        Currently Active
        <span className="text-orange-500 font-bold"> Courses</span>
      </h1>
      <Link to="/admin/newcourse" className="bg-blue-500 p-2 text-center text-white rounded-md">New Course</Link>
      </div>
      <div className="flex flex-wrap  gap-5 justify-evenly items-center px-5 lg:px-0 ">
        {courses?.map((item) => (
          <div
            key={item.id}
            className="w-[96%] md:w-60"
            to={`/description/${item.id}`}
            id={item}
          >
            <div>
              <CourseCard data={item} />
            </div>
            <button
              onClick={() => handleDeleteCourse(item.id)}
              className="bg-red-500 w-full text-white"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminHome;
