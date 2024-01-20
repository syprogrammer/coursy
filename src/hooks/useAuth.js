import { onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import {addUser} from '../redux/slices/user';


const useAuth = () => {
   
    const dispatch = useDispatch();
    
     useEffect(() => {
       onAuthStateChanged(auth, (user) => {
         if (user) {
           console.log("user",user);
          
           dispatch(
            addUser({
              email:user.email,
              uid:user.uid
            })
           ); 
         
         }
       });
     }, [auth, dispatch]);

 
}

export default useAuth