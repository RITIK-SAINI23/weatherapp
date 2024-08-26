import Heading from "./component/Heading.jsx";
import { useState } from "react";
import InfoPanel from './component/InfoPanel.jsx';
import "./index.css"

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [ForcastData, setForcastData] = useState('');
  const [AirIndex, setAirIndex] = useState('');
  /* useEffect(async () => {
    // on load auto get the location and fill the page]
    await WeatherUsingGeoloaction();
  }, []); */

  return (
    <>
      <Heading setWeatherData={setWeatherData} ForcastData={ForcastData} setForcastData={setForcastData}
        AirIndex={AirIndex} setAirIndex={setAirIndex} />
      <InfoPanel
        weatherData={weatherData}
        ForcastData={ForcastData}
        AirIndex={AirIndex} />
    </>
  );
}

export default App;
