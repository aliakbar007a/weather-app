import { useContext, useEffect, useState } from "react";
import { weatherContext } from "./Main";
import React from "react";
import "./style.css"

export const Current = ()=>{
   const {city , setCity , showData , setShowData} = useContext(weatherContext)
   const [temp , setTemp] = useState(null)
   const [minTemp , setMinTemp] = useState(null)
   const [maxTemp , setMaxTemp] = useState(null)
   const [weather , setWeather] = useState(null)
   useEffect(()=>{
    if(showData.length !=0) {
        setTemp(Math.floor(showData.main.temp - 272.15))
        setMinTemp(Math.floor(showData.main.temp_min - 272.15))
        setMaxTemp(Math.floor(showData.main.temp_max - 272.15))
       // setTemp(temp - 273.15)
        console.log(showData);
        setWeather(showData.weather[0].main);
        console.log(minTemp);
        
       
    }
   
    },[showData , city])
    return(
        <div className="current">
        <div className="temp">{temp}<span>°c</span></div>
        <div className="weather">{weather}</div>
        <div className="hi-low">{minTemp}°c /{maxTemp}°c</div>
      </div>
    )
}