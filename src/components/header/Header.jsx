import React, { useRef } from 'react'
import "./header.css"
import { useDispatch } from 'react-redux'
import { toggle } from '../../store/slices/temperatureTypeSlice'
import { fetchWeather } from '../../store/slices/weatherSlice'

function Header({temperatureType,setTemperatureType}) {
  const dispatch = useDispatch()
  const input = useRef(null)

  const onRadioChange = ()=>{
    // dispatch(toggle())
    setTemperatureType(!temperatureType)
  }
  const search = (e)=>{
    if(input.current.value !== " " || input.current.value !== undefined){
      dispatch(fetchWeather(input.current.value))
    }
  }
  return (
    <header>
      <div>
        <input ref={input} type="text" name='city'/>
        <button onClick={search}>Search City</button>
      </div>
      <div  style={{display:"flex"}}>
        <label style={{display:"flex"}}>
          <p style={{color:"white"}}>Celsius</p>
          <input type="radio" name="temperatureType" onChange={onRadioChange} defaultChecked />
        </label>
        <label  style={{display:"flex"}}>
          <p style={{color:"white"}}>Farenhait</p>
          <input type="radio" name="temperatureType" onChange={onRadioChange}/>
        </label>
      </div>
    </header>
  )
}

export default Header