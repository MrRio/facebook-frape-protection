$(document).ready(function(){
	
	var frape_pin = localStorage.getItem("frape_pin");
	
	if(frape_pin == null) {
		console.log('Set a pin');
		var pin = '';
		var pin_2 = ' ';
		
		while(pin != pin_2) {
			var pin = prompt((pin == '' ? 'Welcome to Frape Protection by Snapshot Media. ' : 'Incorrect pin. ') + 'Please set a 4 digit pin.');
			var pin_2 = prompt('Please enter the same pin again.');		
		}
		
		localStorage.setItem("frape_pin", pin);
		
		frape_pin = pin;
	}
	
	$('#profile_stream_composer input[value=Post]').live('click', function() {
		var pin = prompt('Please enter your 4 digit pin:');
		if(pin != frape_pin) {
			alert('Sorry, wrong pin. Please try again.');
		}
		return (pin == frape_pin);
	})
	
})