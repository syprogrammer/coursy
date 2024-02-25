import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, setDoc, where } from "firebase/firestore";
import { db } from '../firebase';

const useGetCourseList = () => {
    const [courses, setCourses] = useState(null)

    useEffect(() => {
        getCourses()
    }, [])

    const getCourses = async () => {
        let result = []
        const q = query(collection(db, "Courses"));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // console.log(doc.id, " => ", doc.data());
            result.push(doc.data())
        });

        setCourses(result)

    }
    console.log(courses)
    return courses
}




export default useGetCourseList