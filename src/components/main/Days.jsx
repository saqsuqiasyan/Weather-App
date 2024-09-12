import React from "react";
import { FaTemperatureHigh } from "react-icons/fa";
import { RiCelsiusFill } from "react-icons/ri";
import { useSelector } from "react-redux";

function Days({ day, chengeDay,temperatureType }) {
    // const temperatureType = useSelector((state) => state.temperatureType);

    const getTemperature = (temp) => {
        if (temperatureType === true) {
            return Math.floor(temp/10);
        } else if (temperatureType === false) {
            return Math.floor((temp * 0.9) / 5 + 32);
        }
        return Math.floor(temp/10); 
    };


    return (
        <div
            className="dayBox"
            onClick={() => {
                chengeDay(day);
            }}
        >
            <div>
                <p>{day[0].dt_txt.split(" ")[0]}</p>
            </div>
            <div>
                <p>
                    {getTemperature(day[0]?.main.temp)}
                    {temperatureType ? <RiCelsiusFill /> : <FaTemperatureHigh />}
                </p>
                <img src={`http://openweathermap.org/img/w/${day[0].weather[0].icon}.png`} alt="" />
            </div>
        </div>
    );
}

export default Days;
