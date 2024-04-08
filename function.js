function addCardToContainer(date, maxTemp, weatherCode){
    document.getElementById('container').innerHTML +=
        `<div class='weatherCard'>
            <h3>Date: ${date}</h3>
            <p>Max Temperature in C: ${maxTemp} degrees</p>
            <p>Weather conditions: ${weatherCode}</p>
        </div>`
}

// function to convert weather code to weather condition (source: https://www.nodc.noaa.gov/archive/arc0021/0002199/1.1/data/0-data/HTML/WMO-CODE/WMO4677.HTM)
function convertWeatherCode(code){
    if(code == 3)
    {
        return 'Clouds generally forming or developing';
    }
    if(code == 53)
    {
        return 'Drizzle, not freezing, continuous';
    }
}

export {addCardToContainer, convertWeatherCode};