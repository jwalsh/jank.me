window.fbAsyncInit = function() {
  FB.init({
						appId      : '164543256968230', // App ID
						channelURL : '//jank.me/channel.html', // Channel File
						status     : true, // check login status
						cookie     : true, // enable cookies to allow the server to access the session
						oauth      : true, // enable OAuth 2.0
						xfbml      : true  // parse XFBML
					});

  // Additional initialization code here

	FB.login(
		function(response) {
			if (response.authResponse) {
				console.log('Welcome!  Fetching your information.... ');
				FB.api(
					'/me', 
					function(response) {
						console.log('Good to see you, ' + response.name + '.');
						FB.logout(
							function(response) {
								console.log('Logged out.');
							});
					});
			} else {
				console.log('User cancelled login or did not fully authorize.');
			}
		}, 
		{
			scope: 'email, publish_actions'
		}
	);


};

// Load the SDK Asynchronously
(function(d){
   var js, id = 'facebook-jssdk'; 
	 if (d.getElementById(id)) {return;}
   js = d.createElement('script'); 
	 js.id = id; 
	 js.async = true;
   js.src = "//connect.facebook.net/en_US/all.js";
   d.getElementsByTagName('head')[0].appendChild(js);
 }(document));
