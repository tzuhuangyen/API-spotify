// import axios from 'axios';
import express from './node_modules/express';
const app = express();

app.post('/spotify/token', (req, res) => {
  const clientId = 'd18603e9464e40c2bcd13950c16d5d10';
  const clientSecret = 'af8f9e6958d547f8bf48bb6e4ffcbf0b';
   const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64'),
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };
   axios.post(authOptions.url, authOptions.form, {
    headers: authOptions.headers
  }).then(response => {
    const access_token = response.data.access_token;
    res.send({ access_token });
  }).catch(error => {
    console.error('Error:', error);
    res.status(500).send('Internal Server Error');
  });
});

const port = 3000;
 app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


