var currentTime = new Date();
var days = ["sunday", "monday", "Tuesday", "Wednesday", "Thursday", "friday" ,"saturday"];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var month = currentTime.getMonth();
var today = currentTime.getDay();
var hour = currentTime.getHours();
var minutes = currentTime.getMinutes();

//=================================================

var searchInput=document.getElementById("searchInput");
var temp_c=document.getElementById("temp_c");
var region=document.getElementById("region");
var day=document.getElementById("day");
var date=document.getElementById("date");
var cloudyState_0=document.getElementById("cloudyState_0");
var wind_dir=document.getElementById("wind_dir");
var chance_of_rain=document.getElementById("chance_of_rain");
var wind_kph=document.getElementById("wind_kph");

var tomorrow=document.getElementById("tomorrow");
var maxtemp_c=document.getElementById("maxtemp_c");
var mintemp_c=document.getElementById("mintemp_c");
var cloudyState_1=document.getElementById("cloudyState_1");

var afterTomorrow=document.getElementById("afterTomorrow");
var maxtemp_c_2=document.getElementById("maxtemp_c_2");
var mintemp_c_2=document.getElementById("mintemp_c_2");
var cloudyState_2=document.getElementById("cloudyState_2");

//==================== functions ====================

    search("cairo")
searchInput.addEventListener("keyup",function(e){
    if(e.target.value!=null){
        search(e.target.value);  
    }
})

async function search(key){
    let myresponse= await fetch(`http://api.weatherapi.com/v1/forecast.json?key=09f4db10b4794468b0c233847212909&q=${key}&days=3`);
    let forecasWeather= await myresponse.json();
    if(myresponse.ok && myresponse.status==200 ){
        displyData(forecasWeather);
    }
}

function displyData(forecasWeather)
{
// ---------first-day --------------
    day.innerHTML=`${days[today]}`;
    date.innerHTML=`${forecasWeather.forecast.forecastday[0].date}`;
    temp_c.innerHTML=`${forecasWeather.current.temp_c}<sup>o</sup>C`;
    region.innerHTML=`${forecasWeather.location.name}, ${forecasWeather.location.country}`;
    cloudyState_0.innerHTML=`${forecasWeather.current.condition.text}`;
    chance_of_rain.innerHTML=`Chance of rain: ${forecasWeather.forecast.forecastday[0].day.daily_chance_of_rain}`;
    wind_kph.innerHTML=`Wind sp: ${forecasWeather.current.wind_kph}`;
    wind_dir.innerHTML=`Wind Dir: ${forecasWeather.current.wind_dir}`;

// ---------second-day --------------
   tomorrow.innerHTML=`${days[today+1]}`;
   maxtemp_c.innerHTML=`${forecasWeather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C`;
   mintemp_c.innerHTML=`${forecasWeather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C`;
   cloudyState_1.innerHTML=`${forecasWeather.forecast.forecastday[1].day.condition.text}`;

// ---------third-day --------------
   afterTomorrow.innerHTML=`${days[today+2]}`;
   maxtemp_c_2.innerHTML=`${forecasWeather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C`;
   mintemp_c_2.innerHTML=`${forecasWeather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C`;
   cloudyState_2.innerHTML=`${forecasWeather.forecast.forecastday[2].day.condition.text}`;
}

//====================== end =======================