
let cityName = document.getElementById("city_input")
let getWeather = document.getElementById("get_weather")
let city = document.getElementById("city")
let position = document.getElementById("position")
let temp = document.getElementById("temperature")
let weather = document.getElementById("weatherDesc")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("windSpeed")



getWeather.addEventListener('click',function() {
    fetch ('https://api.openweathermap.org/data/2.5/weather?q='+cityName.value+'&appid=2e0bb3032bc83cb366ff8a1e4082e60c')
    .then(Response => Response.json())
    .then(data => {
            console.log(data)
            city.innerText=('Weather in ' + data.name)
            position.innerText=('Latitude ' + data.coord.lat+'° N, Longitude '+data.coord.lon+'° E.')
            temp.innerText =('🌞'+(+(data.main.temp)-273.15).toFixed(0)+'°C')
            weather.innerText = ('⛅'+(data.weather[0].description).charAt(0).toUpperCase()+(data.weather[0].description).slice(1))
            humidity.innerText = ('Humidity '+(data.main.humidity)+'%')
            wind.innerText = ('🍃'+'Wind speed '+((+(data.wind.speed)*10)/36).toFixed(2)+'km/h')
        })
    .catch(err => city.innerText="Incorrect city name")
})
