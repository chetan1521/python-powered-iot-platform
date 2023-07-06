const slider = document.getElementById("mySlider");
const sliderValue = document.getElementById("sliderValue");
sliderValue.innerHTML = slider.value;

slider.oninput = function() {
  sliderValue.innerHTML = this.value;
  // do something with the slider value here
}