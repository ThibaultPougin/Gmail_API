import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();

async function getWeather() {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${process.env.LATITUDE}&lon=${process.env.LONGITUDE}&appid=${process.env.OWM_APIKEY}&units=metric&lang=fr`
    );
    const actualWeather = await response.json();
    return `Le temps à Clichy est ${actualWeather.weather[0].description}, il fait ${actualWeather.main.temp}°C et le taux d'humidité est de ${actualWeather.main.humidity}%.`;
    
  } catch (error) {
    console.log(error);
  }

  
}




export { getWeather };
