import React, { useState } from "react";
import "./main.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Days from "./Days";
import NowWeatherBox from "./NowWeatherBox";

function Main({ temperatureType}) {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.weather);

    useEffect(() => {
        dispatch(fetchWeather("Yerevan"));
    }, [dispatch]);

    const [days, setDays] = useState([]);
    const [chosedDay, setChosedDay] = useState([]);

    useEffect(()=>{
      if (data?.list) {
          const groupedDays = [];
          let currentDay = [];
  
          data?.list.forEach((item, index) => {
              if (index === 0 || item.dt_txt.split(" ")[0] === data.list[index - 1].dt_txt.split(" ")[0]) {
                  currentDay.push(item);
              } else {
                  groupedDays.push(currentDay);
                  currentDay = [item];
              }
          });
  
          if (currentDay.length) {
              groupedDays.push(currentDay);
          }
          setDays(groupedDays);
          setChosedDay(groupedDays[0]);
      }

    },[data])

    if (loading) {
        return <main>Loading...</main>;
    }

    if (error) {
        return <main>{error}</main>;
    }

    return (
        <main>
            <div className="infoBox">
                <NowWeatherBox chosedDay={chosedDay}  temperatureType={temperatureType}/>
            </div>
            <div className="daysBox">
                {days.map((day, index) => (
                    <Days key={index} day={day} chengeDay={setChosedDay}  temperatureType={temperatureType}/>
                ))}
            </div>
        </main>
    );
}

export default Main;
