
/*
<!-- random math code to generate random value to check working of gauge -->


<!-- <script>
    function updateGauge() {
const gaugeArrow = document.getElementById("gauge-arrow");
const gaugeText = document.getElementById("gauge-text");
const gaugeValue = Math.floor(Math.random() * 101); // Generate a random value between 0 and 100
const angle = -135 + (gaugeValue / 100) * 270; // Calculate the angle based on the value

gaugeArrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Rotate the arrow
gaugeText.innerHTML = `${gaugeValue}%`; // Update the text
}

</script> -->

*/

  function updateGauge(element) {
    const gaugeArrow = document.getElementById("gauge-arrow");
    const gaugeText = document.getElementById("gauge-text");
      this.element = element;
      this.value = 0;
    
      this.updateValue = function(value) {
        this.value = value;
        var width = (this.value / 100) * this.element.offsetWidth;
        var left = this.element.offsetWidth - width;
        this.element.style.left = left + "px";
      };
    
      this.start = function() {
        var interval = setInterval(this.updateValue.bind(this), 1000);
      };
      gaugeArrow.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`; // Rotate the arrow
      gaugeText.innerHTML = `${gaugeValue}%`; // Update the text
    }
    
    updateGauge.prototype.start();