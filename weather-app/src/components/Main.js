import { Current } from './Current'
import { Location } from './Location'
import { SearchBox } from './SearchBox'
import './style.css'
import React, { createContext, useEffect, useState } from 'react'


export const weatherContext = createContext()
export const Main = ()=>{
    const [city , setCity] = useState('')
    const [time , setTime] = useState(new Date())
    const [showData , setShowData] =useState([])
    const [months , setMonths] = useState(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]);
    const [days , setDays] = useState( ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"])
    return(
        <weatherContext.Provider value={{city , setCity , showData , setShowData , time , setTime ,months , setMonths , days , setDays}}>
        <div className='main'>
            <SearchBox/>
            <Location/>
            <Current/>
        </div>
        </weatherContext.Provider>
    )
}