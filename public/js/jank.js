// The support file for a specific jank. 

FB.api('/me', function(response) {
  alert('Your name is ' + response.name);
});

