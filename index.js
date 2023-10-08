const apiKey = "ae6f4126e433fb233e32852c2157f55f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=Germany&units=metric"
const inputText = document.getElementById("inputText")
const searchBtn = document.getElementById("searchBtn")

async function weatherCheck(city ){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    const data= await response.json()
    console.log(data);
    document.querySelector(".city").innerHTML= data.name
    document.querySelector(".temp").innerHTML= Math.trunc(data.main.temp) + "°C"
    document.querySelector(".humidity").innerHTML= data.main.humidity + "%"
    document.querySelector(".wind").innerHTML= data.wind.speed + " Km/h"
    
}


searchBtn.addEventListener("click", function(){
    weatherCheck(inputText.value)
    inputText.value =""
})

