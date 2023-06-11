//引入 dotenv 套件的方式
require("dotenv").config();
//console.log(process.env.weather_API_Key);
const spotifyID=process.env.clientId;
const spotifySecret=process.env.clientSecret;

const APIremote = (function() {
  // private methods
  const _getToken = async () => {

      const result = await fetch('https://accounts.spotify.com/api/token', {
          method: 'POST',
          headers: {
              'Content-Type' : 'application/x-www-form-urlencoded', 
              'Authorization' : 'Basic ' + btoa( clientId + ':' + clientSecret)
          },
          body: 'grant_type=client_credentials'
      });

      const data = await result.json();
      return data.access_token;
  }

})