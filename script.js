const url = 'https://api.open-meteo.com/v1/forecast?latitude=51.049&longitude=-114.066&daily=weather_code,temperature_2m_max&timezone=America%2FLos_Angeles';
import { addCardToContainer, convertWeatherCode } from "./function.js";

fetch(url)
.then(response => {
    if(!response.ok)
    {
        throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
})
.then(response => {
    let data = response;
    // console.log(data);

    let dateArray = data.daily.time;
    let maxTempArray = data.daily.temperature_2m_max;
    let weatherArray = data.daily.weather_code;

    // convert weather code to actual weather condition from WMO CODE TABLE 4677
    let weatherArrayUpdated = [];
    for(let i=0; i<weatherArray.length; i++)
    {
        weatherArrayUpdated[i] = convertWeatherCode(weatherArray[i]);
    }

    // append data to container div
    for(let i=0; i<dateArray.length; i++)
    {
        addCardToContainer(dateArray[i], maxTempArray[i], weatherArrayUpdated[i]);
    }
})
.catch(error => {
    console.log(error);
})