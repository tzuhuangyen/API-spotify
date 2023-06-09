const APIremote = (function() {
    
  const clientId = 'ZDE4NjAzZTk0NjRlNDBjMmJjZDEzOTUwYzE2ZDVkMTA';
  const clientSecret = ' YWY4ZjllNjk1OGQ1NDdmOGJmNDhiYjZlNGZmY2JmMGI';

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