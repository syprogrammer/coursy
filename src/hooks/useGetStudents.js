import { useEffect, useState } from 'react'
import { collection, getDocs, query, where} from "firebase/firestore";
import { db } from '../firebase';


const useGetStudents = (id) => {
    const [enrolledCourses, setEnrolledCourses] = useState(null)

    useEffect(() => {
        getEnrolledCourses(id)
    }, [])

    const getEnrolledCourses = async (id) => {
        const ordersRef = collection(db, "Enrollment");
        console.log("get enrolled course hook",id)
        // Create a query against the collection.
        const q = query(ordersRef, where("courseid", "==", id))
        const querySnapshot = await getDocs(q);
        const data=[]
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            data.push(doc.data())
            console.log(doc.id, " => ", doc.data());
        });
        setEnrolledCourses(data)
    }

    return enrolledCourses

}

export default useGetStudents