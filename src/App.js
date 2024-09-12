import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./store/slices/weatherSlice";
import  Header  from './components/header/Header'
import  Main from './components/main/Main'


function App() {

  const dispatch = useDispatch()
  const { data, loading, error } = useSelector(state => state.weather)

  useEffect(()=>{
    dispatch(fetchWeather("Yerevan"))
  },[dispatch])

  console.log(data)

  return (
    <div>
      <Header/>
      <Main/>
    </div>
  );
}

export default App;
