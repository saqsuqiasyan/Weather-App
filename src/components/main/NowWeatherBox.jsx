import React from "react";
import HoursInfo from "./HoursInfo";
import { RiCelsiusFill } from "react-icons/ri";

function NowWeatherBox({chosedDay,temperatureType}) {
    return (
        <>
            <div className="nowWeatherBox">
                <p>
                    {Math.floor(chosedDay[0].main.temp / 10)}
                    {temperatureType && <RiCelsiusFill />}
                    {!temperatureType && "f"}
                </p>
                <img src={`http://openweathermap.org/img/w/${chosedDay[0].weather[0].icon}.png`} alt="" />
                <p>{chosedDay[0].weather[0].main}</p>
            </div>
            <div className="dayWeatherBox">
                {chosedDay.map((day) => (
                    <HoursInfo day={day} temperatureType={temperatureType} />
                ))}
            </div>
        </>
    );
}

export default NowWeatherBox;
