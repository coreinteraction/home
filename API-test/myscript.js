//THESE ARE THE VARIABLES WE WILL USE
var windspeed; //Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
var winddeg; //Wind direction, degrees (meteorological)
var temp; //Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit. 
var tempmin;
var tempmax;
var pressure; //Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
var humidity; //Humidity, %
var weathertext; //Group of weather parameters (Rain, Snow, Extreme etc.)
var weatherdescription; //Weather condition within the group
var cloudiness; //Cloudiness, %


$(document).ready(function(){


    $.ajax({
        url: 'http://http://api.openweathermap.org/data/2.5/weather?id=12345&units=metric&APPID=98765', //CHANGE THE URL TO YOUR API QUERY
        dataType: 'jsonp',
        success: function(results){
            weathertext = results.weather[0].main;
            weatherdescription = results.weather[0].description;
            windspeed = results.wind.speed;
            winddeg = results.wind.deg;
            tempmin = results.main.temp_min;
            tempmax = results.main.temp_max;
            temp = results.main.temp;
            pressure = results.main.pressure;
            humidity = results.main.humidity;
            cloudiness = results.clouds.all;

            myWeatherInterpretation();

        }
    });
    

    function myWeatherInterpretation(){
        //THIS IS WHERE YOU CAN CUSTOMIZE YOUR PAGE'S FUNCTIONS    
        
        
        //JUST SEEING IF THE VALUES COME THROUGH
        $('p').append('windspeed: ' + windspeed);
        $('p').append('winddeg: ' + winddeg);
        $('p').append('temp: ' + temp);
        $('p').append('tempmin: ' + tempmin);
        $('p').append('tempmax: ' + tempmax);
        $('p').append('pressure: ' + pressure);
        $('p').append('humidity: ' + humidity);
        $('p').append('weathertext: ' + weathertext);
        $('p').append('weatherdescription: ' + weatherdescription);
        $('p').append('cloudiness: ' + cloudiness);

    

        //END OF MYWEATHERINTERPRETATION FUNCTION
    }   


});