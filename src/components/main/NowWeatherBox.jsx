import React from "react";
import HoursInfo from "./HoursInfo";
import { RiCelsiusFill } from "react-icons/ri";
import { FaTemperatureHigh } from "react-icons/fa";
import { useSelector } from "react-redux";

function NowWeatherBox({ chosedDay,temperatureType }) {
    // const temperatureType = useSelector((state) => state.temperatureType);

    const getTemperature = (temp) => {
        if (temperatureType === true) {
            return Math.floor(temp/10);
        } else if (temperatureType === false) {
            return Math.floor((temp * 0.9) / 5 + 32);
        }
        return Math.floor(temp/10); 
    };


    const temperature = chosedDay[0]?.main.temp;

    return (
        <>
            <div className="nowWeatherBox">
                <p>
                    {getTemperature(temperature)}
                    {temperatureType ? <RiCelsiusFill /> : <FaTemperatureHigh />}
                </p>
                <img src={`http://openweathermap.org/img/w/${chosedDay[0]?.weather[0].icon}.png`} alt={chosedDay[0]?.weather[0].main} />
                <p>{chosedDay[0]?.weather[0].main}</p>
            </div>
            <div className="dayWeatherBox">
                {chosedDay.map((day, index) => (
                    <HoursInfo key={index} day={day} temperatureType={temperatureType} />
                ))}
            </div>
        </>
    );
}

export default NowWeatherBox;
