const apikey='90b42ab7722cdd658905789267140fad'
const apiurl='https://api.openweathermap.org/data/2.5/weather?units=metric&q='
const searchbox=document.querySelector(".search input")
const searchbtn=document.querySelector(".search button")
const weathericon = document.querySelector(".weather-icon")

async function checkweather(city)
{
    const response = await fetch(apiurl + city + `&appid=${apikey}`)
    if(response.status == 404){
        document.querySelector(".error").style.display='block'
        document.querySelector(".weather").style.display='none'
    }
    else{
        var data=await response.json()
    console.log(data)
    document.querySelector('.city').innerHTML=data.name
    document.querySelector('.temp').innerHTML=Math.round(data.main.temp) + '°C'
    document.querySelector('.humidity').innerHTML=data.main.humidity + '%'
    document.querySelector('.wind').innerHTML=data.wind.speed + 'Km/h'

    if (data.weather[0].main.toLowerCase() == 'clouds'){

        weathericon.src = "images/clouds.png";
    } else if (data.weather[0].main.toLowerCase() == 'clear') {
        weathericon.src = "images/clear.png";
    } else if (data.weather[0].main.toLowerCase() == 'drizzle') {
        weathericon.src = "images/drizzle.png";
    } else if (data.weather[0].main.toLowerCase() == 'rain') {
        weathericon.src = "images/rain.png";
    } else if (data.weather[0].main.toLowerCase() == 'mist') {
        weathericon.src = "images/mist.png";
    } else if (data.weather[0].main.toLowerCase() == 'haze') {
        weathericon.src = "images/snow.png";
    }
    
    document.querySelector(".weather").style.display='block'
    document.querySelector(".error").style.display='none'
    }  

}

searchbtn.addEventListener("click",()=> 
    {
        console.log('Button clicked');
        console.log('Search value:', searchbox.value);
        checkweather(searchbox.value);
    }
)


