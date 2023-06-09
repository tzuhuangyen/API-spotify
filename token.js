const clientId = 'ZDE4NjAzZTk0NjRlNDBjMmJjZDEzOTUwYzE2ZDVkMTA=';
const clientSecret = 'YWY4ZjllNjk1OGQ1NDdmOGJmNDhiYjZlNGZmY2JmMGI=';

const authOptions = {
  url:'https://accounts.spotify.com/api/token',
  headers: {
    'Authorization':'Basic ' + (from(client_id + ':' + client_secret).toString('base64')),
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  form: {
    grant_type: 'client_credentials',

  },
  json:true
};
  axios.post(authOptions, function(error,response,body){
    if (!error && response.statusCode === 200) {
      var token = body.access_token;
    }
  });
