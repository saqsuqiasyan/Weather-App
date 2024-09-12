import React from "react";
import { RiCelsiusFill } from "react-icons/ri";

function Days({ day,temperatureType,chengeDay}) {
    return (
        <div className="dayBox" onClick={()=>{chengeDay(day)}}>
            <div>
                <p>{day[0].dt_txt.split(" ")[0]}</p>
            </div>
            <div>
                <p>{Math.floor(day[0].main.temp/10)}{temperatureType && <RiCelsiusFill />}{!temperatureType &&  "f"}</p>
                <img src={`http://openweathermap.org/img/w/${day[0].weather[0].icon}.png`} alt="" />
            </div>
        </div>
    );
}

export default Days;
