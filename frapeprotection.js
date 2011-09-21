$(document).ready(function(){
	
	var frape_proection_pin = localStorage.getItem("frape_proection_pin");
	
	if(frape_proection_pin == null) {
		console.log('Set a pin');
		var pin = '';
		var pin_2 = ' ';
		
		while(pin != pin_2) {
			var pin = prompt((pin == '' ? 'Welcome to Frape Protection by Snapshot Media. ' : 'Incorrect pin. ') + 'Please set a 4 digit pin.');
			var pin_2 = prompt('Please enter the same pin again.');		
		}
		
		localStorage.setItem("frape_proection_pin");
	}
	
	$('#profile_stream_composer input[value=Post]').live('click', function() {
		var pin = prompt('Please enter your 4 digit pin:');
		if(pin != frape_proection_pin) {
			alert('Sorry, wrong pin. Please try again.');
		}
		return (pin == frape_proection_pin);
	})
	
})