const apiKey = "ae6f4126e433fb233e32852c2157f55f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?q="
const inputText = document.getElementById("inputText")
const searchBtn = document.getElementById("searchBtn")
const sky =document.querySelector(".weather-ico")

async function weatherCheck(city ){
    const response = await fetch(apiUrl + city + "&units=metric"+`&appid=${apiKey}`)
    if (response.status == 404){
        document.querySelector(".error-text").style.display="block";
        document.querySelector(".weather").style.display= "none"
    }else{

        const data= await response.json()
        console.log(data);
        document.querySelector(".city").innerHTML= data.name
        document.querySelector(".temp").innerHTML= Math.trunc(data.main.temp) + "°C"
        document.querySelector(".humidity").innerHTML= data.main.humidity + "%"
        document.querySelector(".wind").innerHTML= data.wind.speed + " Km/h"
    
        if(data.weather[0].main == "Clouds"){
     sky.src="images/cloudy.png";
        }else if (data.weather[0].main == "Mist"){ 
            sky.src="images/mist.png"
        }else if (data.weather[0].main == "Rain")
        {
            sky.src='images/raining.png'
        }else if (data.weather[0].main == "Drizzle"){
        sky.src="images/partially.png"
        }else if (data.weather[0].main == "Sun"){
            sky.src="images/sun.png"
        }
        document.querySelector(".weather").style.display="block"
        document.querySelector(".error-text").style.display="none"
    }
    
}


searchBtn.addEventListener("click", function(){
    weatherCheck(inputText.value)
    inputText.value =""
})

