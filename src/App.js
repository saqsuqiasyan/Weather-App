import { useState } from 'react';
import  Header  from './components/header/Header'
import  Main from './components/main/Main'


function App() {
  const [temperatureType, setTemperatureType] = useState(true)

  return (
    <div>
      <Header temperatureType={temperatureType} setTemperatureType={setTemperatureType}/>
      <Main temperatureType={temperatureType} />
    </div>
  );
}

export default App;
