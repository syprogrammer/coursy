import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const signOutUser = ()=>{
    
signOut(auth).then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
}

export default signOutUser