import React, { useRef } from 'react'
import "./header.css"
import { useDispatch } from 'react-redux'
import { toggle } from '../../store/slices/temperatureTypeSlice'
import { fetchWeather } from '../../store/slices/weatherSlice'

function Header() {
  const dispatch = useDispatch()
  const input = useRef(null)

  const onRadioChange = ()=>{
    dispatch(toggle())
  }
  const search = (e)=>{
    if(input.current.value !== " " || input.current.value !== undefined){
      dispatch(fetchWeather(e.target.city))
    }
  }
  return (
    <header>
      <div>
        <input ref={input} type="text" name='city'/>
        <button onClick={search}>Search City</button>
      </div>
      <div  style={{display:"flex"}}>
        <span style={{display:"flex"}}>
          <p style={{color:"white"}}>Celsius</p>
          <input type="radio" name="temperatureType" onChange={onRadioChange} defaultChecked />
        </span>
        <span  style={{display:"flex"}}>
          <p style={{color:"white"}}>Farenhait</p>
          <input type="radio" name="temperatureType" onChange={onRadioChange}/>
        </span>
      </div>
    </header>
  )
}

export default Header