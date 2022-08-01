# weather-live
 It is a MERN full stack weather forcast web application.it is a simple cross platform app which reflects the weather information from WeatherApi of any city you enter .It includes funtiionalities like user registeration and signing .only authorised users are permitted to enter.
 the user can search any city and the daily weather and future forecasts are displayed.it contains a real time map using react-map-gl for visualising and plotting the extreme weather areas.
 the MongoDB is used as the database.
 
 ## Dependancies 
 
 ### Backend
<ul><li>axios </li>
<li>bcript </li>
<li>Json Web Token </li>
<li>Config </li>
<li>Cors </li>
<li>Express </li>
<li>Joi </li>
<li>Joi Password Complexity </li>
<li>MongoDB</li>
<li>NodeMon </li>
</ul>


### Frondend
<ul><li>axios </li>
<li>Mapbox-gl </li>
<li>React Map gl </li>
<li>React Router Dom </li>

</ul>

### How to use...

Clone this app and run npm install command that will install all the dependancies, if you are using for develepment purposes run   npm run dev .
The MongoDB version using is 3.2 but you are free to use any version, port used is 27017.First uninstall mongodb by typing npm uninstall mongodb and then install adequte versions.
The Server port is 5000 and the client port is 3000 .You need to have Mapbox API key for running this project .It is available in Mapbox website.Then run npm start command on server and then on client.



### Outgoing Api calls...

This project uses WeatherApi  for getting the realtime weather and the icons.
You need to have an api key.it is available in weatherapi.com
Weather api = http://api.weatherapi.com/v1/forecast.json?key={USE YOUR KEY HERE}&q=${cityname}&days=${days}&aqi=no&alerts=no

This project also uses Mapbox map for displying the extreme weather conditions .
You need to have an api key.it is available in Mapbox website

###  Api calls from client to server...


api call for getting the extreme weather areas = "http://localhost:5000/getExtreme" method get
api call for adding or searching cityname also used for updating = "http://localhost:5000/add" method post
api call for get recent weather info for top cities = http://localhost:5000/weather method get
api call for creating new users = http://localhost:5000/api/users method post
api call for logging in = http://localhost:5000/api/auth method post
! the route and query for deleting the weather documents from weather collections are written ,but not used.if you want to implement that feature you only have to call to that route from client.


