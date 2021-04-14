      
            function assignWeatherImg(weatherSummary, displayType)
            {
                weatherSummary = weatherSummary.toLowerCase();
                var forecastWeatherIcons = 
                {
                    "thunderstorm with light rain":
                         "Images/WeatherIcons/ThunderstormWithRain.png",
                     "thunderstorm with rain":
                         "Images/WeatherIcons/ThunderstormWithRain.png",                    
                     "thunderstorm with heavy rain":
                         "Images/WeatherIcons/ThunderstormWithRain.png",               
                     "thunderstorm with light drizzle":
                         "Images/WeatherIcons/Thunderstorm.png",                   
                     "thunderstorm with drizzle":
                         "Images/WeatherIcons/Thunderstorm.png",                   
                     "thunderstorm with heavy drizzle":
                         "Images/WeatherIcons/Thunderstorm.png",            
                     "thunderstorm with hail":
                         "Images/WeatherIcons/Thunderstorm.png",                    

                    
                     "light drizzle":
                         "Images/WeatherIcons/Drizzle.png",
                     "drizzle":
                         "Images/WeatherIcons/Drizzle.png",                                        
                     "heavy drizzle":
                         "Images/WeatherIcons/Drizzle.png",      


                     "light rain":
                         "Images/WeatherIcons/Rain.png",                                    
                     "moderate rain":
                         "Images/WeatherIcons/Rain.png",                  
                     "heavy rain":
                         "Images/WeatherIcons/HeavyRain.png",
                    

                     "freezing rain":
                         "Images/WeatherIcons/Rain.png",                 
                     "light shower rain":
                         "Images/WeatherIcons/Rain.png",                   
                     "shower rain":
                         "Images/WeatherIcons/RainWithSun.png",                   
                     "heavy shower rain":
                         "Images/WeatherIcons/Rain.png",
                    

                     "light snow":
                         "Images/WeatherIcons/SnowWithSun.png",                                
                     "snow":
                         "Images/WeatherIcons/Snow.png",
                     "heavy snow":
                         "Images/WeatherIcons/Snow.png",                   
                     "mix snow/rain":
                         "Images/WeatherIcons/Images/WeatherIcons/SnowWithSun.png",
                    

                     "sleet":
                         "Images/WeatherIcons/Images/WeatherIcons/Sleet.png",                   
                     "heavy sleet":
                         "Images/WeatherIcons/Images/WeatherIcons/Sleet.png",  


                     "snow shower":
                         "Images/WeatherIcons/Images/WeatherIcons/SnowWithSun.png",
                     "heavy snow shower":
                         "Images/WeatherIcons/Snow.png",
                    
               
                     "flurries":
                         "Images/WeatherIcons/Flurries.png",                   
                     "mist":
                         "Images/WeatherIcons/CloudWithSunAndLines.png",                                      
                     "smoke":
                        "Images/WeatherIcons/CloudWithSunAndLines.png",                                           
                     "haze":
                         "Images/WeatherIcons/CloudWithSunAndLines.png",                   
                     "sand/dust":
                         "Images/WeatherIcons/CloudWithSunAndLines.png",
                    

                     "fog":
                         "Images/WeatherIcons/CloudWithSunAndLines.png",                  
                     "freezing fog":
                         "Images/WeatherIcons/CloudWithSunAndLines.png",
                    

                     "clear sky":
                         "Images/WeatherIcons/Sun.png",
                     "few clouds":
                         "Images/WeatherIcons/SingleCloudWithSun.png",                 
                     "scattered clouds":
                         "Images/WeatherIcons/SingleCloudWithSun.png",                  
                     "broken clouds":
                         "Images/WeatherIcons/TwoCloudsWithSun.png",                  
                     "overcast clouds":
                         "Images/WeatherIcons/TwoClouds.png",
                };
                var weatherBanners = 
                {                    
                    "thunderstorm with light rain":
                        "Images/TodayWeatherImages/RainAndThunder.svg",
                     "thunderstorm with rain":
                         "Images/TodayWeatherImages/RainAndThunder.svg",                
                     "thunderstorm with heavy rain":
                         "Images/TodayWeatherImages/RainAndThunder.svg",              
                     "thunderstorm with light drizzle":
                         "Images/TodayWeatherImages/RainAndThunder.svg",                 
                     "thunderstorm with drizzle":
                        "Images/TodayWeatherImages/RainAndThunder.svg",                
                     "thunderstorm with heavy drizzle":
                        "Images/TodayWeatherImages/RainAndThunder.svg",          
                     "thunderstorm with hail":
                        "Images/TodayWeatherImages/RainAndThunder.svg",                  

                    
                     "light drizzle":
                         "Images/TodayWeatherImages/HeavyRain.svg",
                     "drizzle":
                        "Images/TodayWeatherImages/HeavyRain.svg",                                      
                     "heavy drizzle":
                        "Images/TodayWeatherImages/HeavyRain.svg",     


                     "light rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",                               
                     "moderate rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",                
                     "heavy rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",
                    

                     "freezing rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",           
                     "light shower rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",                   
                     "shower rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",                     
                     "heavy shower rain":
                        "Images/TodayWeatherImages/HeavyRain.svg",    
                    

                     "light snow":
                         "Images/TodayWeatherImages/HeavySnow.svg",                              
                     "snow":
                        "Images/TodayWeatherImages/HeavySnow.svg",  
                     "heavy snow":
                        "Images/TodayWeatherImages/HeavySnow.svg",                   
                     "mix snow/rain":
                        "Images/TodayWeatherImages/HeavySnow.svg",  
                    

                     "sleet":
                        "Images/TodayWeatherImages/HeavySnow.svg",                  
                     "heavy sleet":
                        "Images/TodayWeatherImages/HeavySnow.svg",  


                     "snow shower":
                        "Images/TodayWeatherImages/HeavySnow.svg",  
                     "heavy snow shower":
                        "Images/TodayWeatherImages/HeavySnow.svg",  
                    
               
                     "flurries":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image                 
                     "mist":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image                                     
                     "smoke":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image                                           
                     "haze":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image                    
                     "sand/dust":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image   
                    

                     "fog":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image                   
                     "freezing fog":
                        "Images/TodayWeatherImages/Sunny.svg",  // Replace with actual image   
                    

                     "clear sky":
                        "Images/TodayWeatherImages/Sunny.svg",    
                     "few clouds":
                        "Images/TodayWeatherImages/FewClouds.svg",   // Replace with image that has clouds              
                     "scattered clouds":
                        "Images/TodayWeatherImages/FewClouds.svg",                  
                     "broken clouds":
                        "Images/TodayWeatherImages/Sunny.svg",               
                     "overcast clouds":
                        "Images/TodayWeatherImages/Overcast.svg",  
                };
                var weatherBadges = { };
                switch(displayType)
                {
                    case "icons":
                    return forecastWeatherIcons[weatherSummary];
                    break;
                    case "banners":
                    return weatherBanners[weatherSummary];
                    break;
                    case "badges":
                    return "url('"+forecastWeatherIcons[weatherSummary]+"')";
                    break;
                    default:
                    return "";
                }
            };

            $(document).ready(function(){

            //los angelas
            //var latitude = 	34.052235;
            //var longitude = -118.243683;

            var globalTodayInfo = "";  
            //var globaLat = 0;
            //var globaLong = 0;

//Uncoment below for auto location part 1

                var ipstackKey = "86c8ccdf5b1e3616c29e8881223defb4";
                var ipstackURL = "http://api.ipstack.com/check?access_key=" + ipstackKey;
                $.get(ipstackURL, function(data)
                {
                    console.log("ipstackData", data);
                    var latitude = data.latitude;
                    var longitude = data.longitude;
              

                //Brisbane
				//var latitude = 	-27.470125;
                //var longitude = 153.021072;

                //var latitude = 28.039465
                //var longitude = -81.949806

                //bahamas
                //var latitude = 25.025885;
                //var longitude = -78.035889;
                
				//Key for WeatherBit API
				var weatherBitKey = "32d3c5277a1e44d5b50632386f03cd60";

				//WeatherBit API call
				var weatherBitURL = "https://api.weatherbit.io/v2.0/forecast/daily?" + "lat=" + latitude + "&" + "lon=" + longitude + "&key=" + weatherBitKey;
                $.get(weatherBitURL, function(data)
                {
                    globalTodayInfo = data;
                    console.log("WeatherBitAPI", data);
                    document.getElementById("currentyCityName").innerHTML = data.city_name;
                    var todaysWeather = $("<h3>").text("Currently " + data.data[0].weather.description + " and");
                    
                    document.getElementById("currenttemp").innerHTML = data.data[0].temp;
                    document.getElementById("currentWeatherState").innerHTML = data.data[0].weather.description;
                    document.getElementById("maxtemp").innerHTML = data.data[0].max_temp + "°C";
                    document.getElementById("mintemp").innerHTML = data.data[0].min_temp + "°C";
                    document.getElementById("chanceOfRain").innerHTML = data.data[0].pop + "%";
                    document.getElementById("short-box").style.backgroundImage = assignWeatherImg(data.data[0].weather.description, "badges");
                    document.getElementById("todayImage").src= assignWeatherImg(data.data[0].weather.description, "banners");
                    
                    var forecastContainer = document.getElementById("scrollableForecastContainer");
                    var foreCastDays = forecastContainer.getElementsByClassName("forecastDay");
                    console.log(foreCastDays.length);
                    var test = document.getElementById("scrollableForecastContainer").children;
                    console.log("Value Test",test[1].children[2].nodeValue);
                    console.log("Testa", document.getElementById("scrollableForecastContainer").children);

                    for (i = 0; i < foreCastDays.length; i++) 
                    {         
                        var currentDay = new Date(data.data[i+1].ts * 1000);
                        var day = currentDay.toLocaleString('en-US', 
                        {
                            timeZone: data.timezone,
                            weekday: 'long'
                        });

                        test[i].children[0].textContent = day;

                        if(i==0) test[i].children[0].textContent = "Tommorow";

                        test[i].children[1].src = assignWeatherImg(data.data[i+1].weather.description, "icons");
                        test[i].children[2].textContent = data.data[i+1].temp + "°C";
                        test[i].children[4].children[1].textContent = data.data[i+1].pop + "%";
                        console.log("Attempt" + i, test[i].children[2]);                 

                    }

                //Key for OpenWeather API
                var openWeatherKey = "ea339d8a8ded0f80c2828bd2c35734df";
                var openWeatherURl = "https://api.openweathermap.org/data/2.5/weather?" + "lat=" + latitude + "&" + "lon=" + longitude + "&appid=" + openWeatherKey;  
                
                //OpenWeather API call
                $.get(openWeatherURl, function(data)
                {

                    console.log("OpenWeather",data);

                    //document.getElementById("test").innerHTML = openWeatherURl;
                    document.getElementById("humidity").innerHTML = data.main.humidity + "%";

                    var sunRiseSec = data.sys.sunrise;   
                    var sunRiseDate = new Date(sunRiseSec * 1000);
                    //var sunRiseTime = sunRiseDate.toLocalTimeString();
                    var currentDay = new Date(globalTodayInfo.data[0].sunrise_ts * 1000);
                    var sunrise = currentDay.toLocaleTimeString('en-GB', 
                        {
                            timeZone: globalTodayInfo.timezone,
                        });

                    //Removes seconds from text
                    sunrise = sunrise.substring(0, sunrise.length - 3);

                    document.getElementById("sunrise").innerHTML = sunrise;
                    currentDay = new Date(globalTodayInfo.data[0].sunset_ts * 1000);
                    sunset = currentDay.toLocaleTimeString('en-GB', 
                        {
                            timeZone: globalTodayInfo.timezone,
                        });
                        
                    //Removes seconds from text
                    sunset = sunset.substring(0, sunset.length - 3);

                    document.getElementById("sunset").innerHTML = sunset;
                    console.log("data3",data);
                });
            });

                var weatherAPIKey = "502d2dc36bab4b4482093525201609";
                var weatherAPIURl = "https://api.weatherapi.com/v1/forecast.json?" +"key=" + "502d2dc36bab4b4482093525201609" + "&" + "q=" + latitude + "," + longitude + "&&days=1";

                $.get(weatherAPIURl, function(data)

                {
                    document.getElementById("uvIndex").innerHTML = data.current.uv;
                    document.getElementById("windSpeed").innerHTML = data.current.wind_kph + " kph";
                    var currentDay = new Date(data.current.last_updated_epoch * 1000);
                    var day = currentDay.toLocaleString('en-US', 
                        {
                            timeZone: data.location.tz_id,
                            weekday: 'long'
                        });
                    console.debug(day);
                    //document.getElementById("dayOfWeek").innerHTML = day;
                    console.log("weatherAPIData",data);
                });

			});

//Uncomment below for auto location part 2
            
        });