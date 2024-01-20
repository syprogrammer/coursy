import { useEffect, useState } from 'react'
import { collection, doc, getDoc, getDocs, query, where } from "firebase/firestore";
import { db } from '../firebase';


const useGetEnrolledCourses = (uid) => {
    const [enrolledCourses, setEnrolledCourses] = useState({})

    useEffect(() => {
        getEnrolledCourses(uid)
    }, [])

    const getEnrolledCourses = async (uid) => {
        const ordersRef = collection(db, "Enrollment");
        console.log("get enrolled course hook", uid)
        // Create a query against the collection.
        const q = query(ordersRef, where("userid", "==", uid))
        const querySnapshot = await getDocs(q);
        const enrollDetails = []
        let courseDetailsArray=[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
        
            const courseDetails = getCourseDetails(doc.data().courseid)
            courseDetailsArray.push(courseDetails)
            enrollDetails.push(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        setEnrolledCourses({courseDetailsArray,enrollDetails})
    }

    const getCourseDetails = async (id) => {
        console.log("get course details called with id ", id)
        const docRef = doc(db, "Courses", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("getCourseDetails =>:", docSnap.data());
           return docSnap.data()
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }


    return enrolledCourses

}

export default useGetEnrolledCourses