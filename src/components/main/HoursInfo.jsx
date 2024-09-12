import React from 'react'
import { RiCelsiusFill } from 'react-icons/ri'

function HoursInfo({day,temperatureType}) {
  return (
    <div className='hourseInfo'>
        <p>{day.dt_txt.split(" ")[1]}</p>
        <p>{Math.floor(day.main.temp/10)}{temperatureType && <RiCelsiusFill />}{!temperatureType &&  "f"}</p>
        <img src={`http://openweathermap.org/img/w/${day.weather[0].icon}.png`} alt="" />
    </div>
  )
}

export default HoursInfo