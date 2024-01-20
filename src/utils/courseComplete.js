import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

 const markCourseComplete = async (id) => {
    console.log("Updating course=>",id)
    try {
        const enrollRef = doc(db, "Enrollment", id);
        // Set the "capital" field of the city 'DC'
        await updateDoc(enrollRef, {
            progress: "complete"
        });

    } catch (error) {
        console.log("error while updating course progress=>", error)
    }
}

export default markCourseComplete