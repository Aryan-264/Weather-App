const apikey = "62f01c0d8f5f010159d027f17f492100"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

let search = document.querySelector(".search input")
let button = document.querySelector(".search button")
let invalid = document.querySelector(".search p")
let images = document.querySelector(".image img")
async function checkweather(city) {
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    var data = await response.json()
    console.log(data)
    if (data.cod == 404) {
        invalid.style.display = "block"
        document.querySelector(".contain").style.display = "none"

    }
    else {
        invalid.style.display="none"
        document.querySelector(".temp p").innerHTML = Math.round(data.main.temp) + "°c"
        document.querySelector(".temp h3").innerHTML = data.name
        document.querySelector(".wind .text h3").innerHTML = data.wind.speed + " Km/h"
        document.querySelector(".humid .text h3").innerHTML = data.main.humidity + "%"
        let condition = data.weather[0].main;
        images.src = `./images/${condition}.png`
        document.querySelector(".contain").style.display = "block"
    }
}
button.addEventListener("click", (event) => {
    event.preventDefault();
    checkweather(search.value)
})
