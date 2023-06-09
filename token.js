const clientId = 'ZDE4NjAzZTk0NjRlNDBjMmJjZDEzOTUwYzE2ZDVkMTA=';
const clientSecret = 'YWY4ZjllNjk1OGQ1NDdmOGJmNDhiYjZlNGZmY2JmMGI=';
let accessToken = 'BQAXUX7rAPGw-vqZ9AkmJQc2YHojSRnaHxoqG_SuAiCAXkaSbP3VKbLSUo-3iCo7TM_H-uGauysjNVSXjrOsd3AJQwH-KL5eKAS8jZQMsdvXdHfol3g';

const credentials = `btoa(${clientId}:${clientSecret})`;
const authOptions = {
  url:'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization':'Basic ' + credentials.toString('base64'),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    grant_type: 'refresh_token',
    refresh_token: refreshToken
  },
  json:true};

 function getAccessToken() {
  axios.post(authOptions, function(error,response,body){
     refreshToken = response.form.refresh_token;
    if (!error && response.statusCode === 200) {
      var refreshToken = body.access_token;
      response.send({
        'access_token': refreshToken
      })
    .then((response) => {
      console.log(`Access token: ${refreshToken}`);
      // Do something with the access token, like make API requests
    })
    .catch((error) => {
      console.error(error);
    });
  }
});
 }
 // Call the getAccessToken function to get an initial access token
getAccessToken()