var ledButton = document.querySelector('.led-button');
var ledLight = document.querySelector('.led-light');
var isOn = false;

ledButton.addEventListener('click', function() {
	isOn = !isOn;
	if (isOn) {
		ledLight.style.boxShadow = '0 0 10px #ffffff, 0 0 20px #ffffff, 0 0 30px #00ff00, 0 0 40px #00ff00, 0 0 50px #00ff00';
		ledLight.style.background = 'radial-gradient(circle at center, #00ff00 0%, #006600 50%, #003300 100%)';
	} else {
		ledLight.style.boxShadow = '0 0 5px #ffffff, 0 0 10px #ffffff, 0 0 15px #ffffff, 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #ff0000, 0 0 50px #ff0000';
		ledLight.style.background = 'radial-gradient(circle at center, #ff0000 0%, #660000 50%, #330000 100%)';
	}
});