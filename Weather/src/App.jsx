import { useState } from 'react';
import './App.css'

function App() {

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]
  const currentDate = new Date();
  const month = months[currentDate.getMonth()];
  const date = currentDate.getDate();
  const year = currentDate.getFullYear();
  const [city, setCity] = useState('Haridwar');
  const [status, setStatus] = useState('Mostly Sunny');
  const [temp, setTemp] = useState('29');
  const [weather,setWeather] = useState("/sun.png")
  const weatherData = async () => {
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=97263802bf31168f6d49483f36063d73`);
      const data = await response.json();
      console.log(data.name);
      setTemp((data.main.temp -273).toFixed(0) );
      weatherUI(data.weather[0].main);
      setStatus(data.weather[0].description);
    } catch (error) {
      alert(error.message);
    }
   
  }
  const getData = (e) => {
    e.preventDefault();
    weatherData();
  }

  const cityName = (e) => {
    setCity(e.target.value);
  }

  const weatherUI = (weather) => {
    switch (weather) {
      case 'Clouds':
        setWeather("/thunder.png");
        break;
      case 'Rain':
        setWeather("/rain_with_cloud.png");
        break;
      case 'Mist': 
      setWeather("/Tornado.png");
        break;
      case 'Haze':
        setWeather("/sun.png");
        break;
      default:
        setWeather('/sun.png')
    }
  }
  
  return (
    <div className="App">
      <div className="container">
        {weatherData &&
          <>
          <div className="container_date">{month} {date}, {year}</div>
          <div className="container_city">{city}</div>
          <img src={weather} alt="climate" className='container_img' />
          <div className='degrees'>
            <div className="container_degree">{temp} </div>
            <div className="degree_icon">&deg;</div>
          </div>
          <div className="status">{status}</div>
          <form className="form" onSubmit={getData}>
            <input type="text" className='input' placeholder='Enter city name...' onChange={cityName} />
            <button type='submit'>Get</button>
          </form>
          </>
        }
        
      </div>
    </div>
  )
}

export default App




/* https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=97263802bf31168f6d49483f36063d73 */