function TemperatureSensorWidget(element) {
    this.element = element;
    this.temperature = 0;
  
    this.updateTemperature = function(temperature) {
      this.temperature = temperature;
      var text = this.temperature + "°C";
      this.element.querySelector("#temperature").innerHTML = text;
    };
  }
  
  TemperatureSensorWidget.prototype.start = function() {
    var interval = setInterval(this.updateTemperature.bind(this), 1000);
  };
  
  var widget = new TemperatureSensorWidget(document.getElementById("temp-sensor-container"));
  widget.start();