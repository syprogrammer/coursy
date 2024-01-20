
import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';
const useGetCourseDetails = (id) => {
    const [courseDetails, setCourseDetails] = useState(null)
    // let id ="Edt9XqKdkyAGirRGHF4D"
    useEffect(() => {
        getCourseDetails(id)
    }, [])

    const getCourseDetails = async (id) => {
        console.log("get course details called with id ",id)
        const docRef = doc(db, "Courses", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setCourseDetails(docSnap.data())
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    return courseDetails
}

export default useGetCourseDetails