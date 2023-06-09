const clientId = 'ZDE4NjAzZTk0NjRlNDBjMmJjZDEzOTUwYzE2ZDVkMTA=';
const clientSecret = 'YWY4ZjllNjk1OGQ1NDdmOGJmNDhiYjZlNGZmY2JmMGI=';
let accessToken = 'BQDSM3ePppx9NclPYblSgdPFh3OEWBI64KcFR4G37fOI__9l0fe1bDHWBa9xkZ-ERKB9_9UdxZAKhfg6p8_CHhZer0NUljI_Im9cgdKHcuYe3a_6XTA';

function searchTracks(query) {
    axios.get(`https://api.spotify.com/v1/search?q=${query}&type=track`, {
        headers: {
      Authorization: `Bearer ${refreshToken}`
        }
      })
      .then(response => {
    displayResults(response.data.tracks.items);
      })
      .catch(error => {
        console.log(error);
      });
  }
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const resultsDiv = document.getElementById('results');
 
function displayResults(data) {
  if (!data || !data.length) {
    console.log('Invalid data');
    return;
  }
  resultsDiv.innerHTML = '';

   for (const track of data) {
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
     const playButton = document.createElement('button');

    playButton.innerText = 'Play';
    playButton.addEventListener('click', () => {
      audio.play();
    });
    const stopButton = document.createElement('button');
    stopButton.innerText = 'Stop';
    stopButton.addEventListener('click', () => {
      audio.pause();
      audio.currentTime = 0;
    });
    trackDiv.appendChild(trackName);
    trackDiv.appendChild(artistName);
    trackDiv.appendChild(playButton);
    trackDiv.appendChild(stopButton);
    trackDiv.appendChild(albumImage);
    trackDiv.appendChild(audio);

    resultsDiv.appendChild(trackDiv);
}
}
searchButton.addEventListener('click', () => {
  const searchQuery = searchInput.value;
  searchTracks(searchQuery);
  });


  