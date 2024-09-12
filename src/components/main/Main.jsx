import React from 'react'
import "./main.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "../../store/slices/weatherSlice";
import Days from './Days';
import NowWeatherBox from './NowWeatherBox';

function Main() {

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.weather)
  const temperatureType = useSelector(state=>state.temperatureType)

  useEffect(()=>{
    dispatch(fetchWeather("Yerevan"))
  },[dispatch])

  let chosedDay
  let days = []
  let dayIndex = 0
  days[dayIndex] = []
  for(let i = 0;i<data?.list.length;i++){
    if(days[dayIndex].length === 0 || days[dayIndex][0].dt_txt.split(" ")[0] === data.list[i].dt_txt.split(" ")[0]){
      days[dayIndex].push(data.list[i])
    } else if(days[dayIndex][0].dt_txt.split(" ")[0] !== data.list[i].dt_txt.split(" ")[0]){
      dayIndex += 1
      days[dayIndex] = []
      days[dayIndex].push(data.list[i])
    }
  }
  chosedDay = days[0]
  // console.log(chosedDay)
  // console.log(headInfo)
  console.log(days)

  setTimeout(()=>{
    console.log(chosedDay)
  },1000)

  return (
    <>
      {loading && <main></main>}
      {data &&
      <main>
        <div className='infoBox'>
          <NowWeatherBox chosedDay={chosedDay} temperatureType={temperatureType}/>
        </div>
        <div className='daysBox'>
          {days.map(day=> <Days day={day} temperatureType={temperatureType} chengeDay = {(day)=>{chosedDay = day}}/>)}
        </div>
      </main>}
      {error && <main></main>}
    </>
  )
}

export default Main