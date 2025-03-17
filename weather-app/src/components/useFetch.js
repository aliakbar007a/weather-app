import { useEffect } from "react";

function useFetch (callback){
    useEffect(()=>{
        const handleFetch = (event)=>{
            if(event.key ==="Enter"){
                console.log(event);
                
                callback()
            }
        };
        window.addEventListener("keydown",handleFetch);
        return()=>{
            window.removeEventListener("keydown",handleFetch)
        };
    },[callback])
   
}
export default useFetch;