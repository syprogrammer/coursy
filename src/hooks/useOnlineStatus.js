import { useEffect, useState } from "react"


const useOnlineStatus = ()=>{
  
    const [isOnline,setIsOnline] = useState(true)

    useEffect(()=>{
        console.log("useonline hook called")
        const handleOnline = ()=>{
            setIsOnline(true)
        }
        const handleOffline = ()=>{
            setIsOnline(false)
        }

        window.addEventListener("online",handleOnline)
        window.addEventListener("offline",handleOffline)


        return ()=>{
            window.removeEventListener("online",handleOnline)
            window.removeEventListener("offline",handleOffline)
        }
    },[])

    return isOnline
}

export default useOnlineStatus