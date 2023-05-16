// Replace CLIENT_ID and CLIENT_SECRET with your own values
const CLIENT_ID = 'f9fa22545bd34088ab42a89de947c57a';
const CLIENT_SECRET = 'a4f80e9180774d69a6bc05e071cc0286';
const token = ['BQDT45M92vmQot5RDWKImrSFZzKcju4U1meDnt4Ng9wlE3eBevN4zsEX91_a3I5el0nYGCHTiBRHBrkzhmQBoSaMRh5zqxRXesugoFohX0xSFbYi6xNey0j00Rt7WkMHMMVIWl6AdbGjsjWeeq7zNbWLYltFFD5z5s-ZFsvhAnrz5UYgTKxOTZBV6wP-xyxiUzSRpAXVBudP32YqcA'];
    // Set up the Spotify Web Playback SDK player
// Initialize the Web Playback SDK player

var clientId = 'f9fa22545bd34088ab42a89de947c57a';
    var redirectUri = 'https://avazquez736.github.io/trail-group-project/';

    // Spotify API endpoint
    var apiEndpoint = 'https://api.spotify.com/v1';

    // Authorize the user with Spotify
    function authorizeSpotify() {
      // Redirect the user to the Spotify authorization page
      var authUrl = 'https://accounts.spotify.com/authorize' +
        '?client_id=' + encodeURIComponent(clientId) +
        '&redirect_uri=' + encodeURIComponent(redirectUri) +
        '&response_type=token' +
        '&scope=user-read-private';
      window.location.href = authUrl;
    }

    // Get the access token from the URL hash fragment
    function getAccessTokenFromHash() {
      var hash = window.location.hash.substr(1);
      var params = new URLSearchParams(hash);
      return params.get('access_token');
    }

    // Example API request to get a user's profile
    function getUserProfile(accessToken) {
      var url = apiEndpoint + '/me';
      fetch(url, {
        headers: {
          'Authorization': 'Bearer ' + accessToken
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }

    // Main entry point
    function init() {
      // Check if the access token is present in the URL hash
      var accessToken = getAccessTokenFromHash();

      if (accessToken) {
        // Access token is available, make API requests
        getUserProfile(accessToken);
      }
    }

    // Call the init function when the page loads
    window.onload = init;