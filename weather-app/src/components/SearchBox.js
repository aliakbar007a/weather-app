import React, { useEffect ,useState} from "react";
import "./style.css"
import { useContext  } from "react";
import { weatherContext } from "./Main";
import useFetch from "./useFetch";


export const SearchBox = ()=>{
    const { city ,setCity , showData , setShowData } = useContext(weatherContext)
    const fetchingData =()=>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6f431abf6ed82bbaf859ded64bde583f`)
        .then(res =>res.json())
        .then(data => setShowData(data))
    }
    
    const handleEnterPress = ()=>{
        fetchingData()
        setCity("");
    }

   useFetch(handleEnterPress)
    return(
        <div className="search-box">
            <input type="text" 
            value={city}
            placeholder="Search for a city..."
            onChange={(e)=> setCity(e.target.value) } 
            />
        </div>
    )
}