const apiKey="9c80df0e43fc166fb6d8e4492283a975";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q="

const searchfield=document.querySelector(".frame input")
const searchbtn=document.querySelector(".frame button")

const weather_image= document.querySelector(".weather_icon")
async function checkweather(city) {
    document.querySelector(".mausam").style.display='block'
    const response=await fetch (apiUrl +city+ `&appid=${apiKey}`);
    if (response.status==404)
    {
        document.querySelector(".error").style.display='block';
        document.querySelector(".mausam").style.display='none'
    }
    else{
    var data =await response.json();
    document.querySelector(".error").style.display='none';
    console.log(data)
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°c";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+" km/h";
    
    if (data.weather[0].main=="Rain")
    {
       weather_image.src="images/rain.png"
    }
    else if (data.weather[0].main=="Clouds")
    {
       weather_image.src="images/clouds.png"
    }
    else if (data.weather[0].main=="Clear")
    {
       weather_image.src="images/clear.png"
    }
    else if (data.weather[0].main=="Drizzle")
    {
       weather_image.src="images/drizzle.png"
    }
    else if (data.weather[0].main=="Mist")
    {
       weather_image.src="images/mist.png"
    }

    }
    
    
}

searchbtn.addEventListener("click",()=>
{
    checkweather(searchfield.value);

})
