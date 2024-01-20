
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";


const createNewUser = (email, password) => {

    return new Promise((resolve, reject) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                resolve(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(error.message)
            })
    })
}

export default createNewUser