import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const LikeCourse = async (id, updatedLikeCount) => {
    console.log("Updating course Like=>", id)
    try {
        const Ref = doc(db, "Courses", id);
        // Set the "capital" field of the city 'DC'
        await updateDoc(Ref, {
            likes: updatedLikeCount
        });
        return true
    } catch (error) {
        console.log("error while updating course likes=>", error)
    }
    return false
}

export default LikeCourse