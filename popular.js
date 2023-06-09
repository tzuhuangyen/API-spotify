const clientId = 'ZDE4NjAzZTk0NjRlNDBjMmJjZDEzOTUwYzE2ZDVkMTA=';
const clientSecret = 'YWY4ZjllNjk1OGQ1NDdmOGJmNDhiYjZlNGZmY2JmMGI=';
let accessToken = 'BQDSM3ePppx9NclPYblSgdPFh3OEWBI64KcFR4G37fOI__9l0fe1bDHWBa9xkZ-ERKB9_9UdxZAKhfg6p8_CHhZer0NUljI_Im9cgdKHcuYe3a_6XTA';

// function getAccessToken() {
//             const data = new URLSearchParams();
//             data.append('grant_type', 'client_credentials');
//             data.append('client_id', clientId);
//             data.append('client_secret', clientSecret);
  
//             const config = {
//               headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//               }
//             };
//             return axios.post('https://accounts.spotify.com/api/token', data, config)
//             .then(response => {
//               accessToken = response.data.access_token;
//               console.log(`New Access Token: ${accessToken}`);
//             })
//             .catch(error => {
//               console.log('Failed to retrieve access token.');
//             });
//         }

function getTopTracks() {
        return axios.get('https://api.spotify.com/v1/me/top/tracks', {
            headers: {
            Authorization: `Bearer ${accessToken}`
            }
        });
        }

function displayResults(data) {
            const resultsDiv = document.getElementById('topResults');
            resultsDiv.innerHTML = '';
  
            const tracks = data.items;
            tracks.forEach(track => {
              const trackDiv = document.createElement('div');
              trackDiv.classList.add('track');
  
              const trackName = document.createElement('h2');
              trackName.innerText = track.name;
  
              const artistName = document.createElement('p');
              artistName.innerText = track.artists[0].name;
  
              const albumImage = document.createElement('img');
              albumImage.src = track.album.images[0].url;

              const audio = document.createElement('audio');
            audio.src = track.preview_url;
            audio.setAttribute('controls', 'true');

            trackDiv.appendChild(trackName);
            trackDiv.appendChild(artistName);
            trackDiv.appendChild(albumImage);
            trackDiv.appendChild(audio);
            resultsDiv.appendChild(trackDiv);
          });
        }

// getAccessToken().then(() => {
//             getTopTracks()
//               .then(response => {
//                 console.log(response.data);
//                 displayResults(response.data);
//               })
//               .catch(error => {
//                 console.log(error);
//               });
// });