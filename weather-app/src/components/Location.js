import React, { useEffect, useState } from "react";
import "./style.css"
import { useContext } from "react";
import { weatherContext } from "./Main";
export const Location = ()=>{
   const { showData , setShowData  ,days , setDays ,months , setMonths ,   time , setTime} = useContext(weatherContext)
   const [sss ,setsss] =useState("")
   //console.log(showData.sys.country);
  useEffect(()=>{
    setTime(new Date())
    setDays(days[time.getDay()])
    setMonths(months[time.getMonth()])
 
  },[])
    return(
        <section className="location">
        <div className="city">
         
         {showData.name}
        </div>
        <div className="date">{days} {time.getDate()} {months} {time.getFullYear()}</div>
        <div>
         {
          
         }
        </div>
      </section>
    )
}