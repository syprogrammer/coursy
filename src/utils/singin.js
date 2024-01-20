
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";



const SigninUser = (email, password) => {
    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                resolve(user)
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                reject(errorMessage)
            });
    })
}

export default  SigninUser