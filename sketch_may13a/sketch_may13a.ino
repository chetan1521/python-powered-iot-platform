#include <ESP8266WiFi.h>

// Replace with your network credentials
const char* ssid = "OnePlus 11R 5G";
const char* password = "whydouwant";

// Set the GPIO pin for the bulb
const int bulbPin = y1;

WiFiServer server(80);

void setup() {
  // Initialize Serial Monitor
  Serial.begin(115200);

  // Connect to Wi-Fi
  WiFi.begin(ssid, password);
  while (WiFi.status() != WL_CONNECTED) {
    delay(1000);
    Serial.println("Connecting to WiFi...");
  }
  
  Serial.println("Connected to WiFi");

  // Start the server
  server.begin();

  // Set the bulb pin as an output
  pinMode(bulbPin, OUTPUT);
  // Turn off the bulb initially
  digitalWrite(bulbPin, LOW);

  Serial.print("Server started. IP address: ");
  Serial.println(WiFi.localIP());
}

void loop() {
  WiFiClient client = server.available();
  
  if (client) {
    Serial.println("New client connected");

    // Read the request
    String request = client.readStringUntil('\r');
    Serial.println(request);
    client.flush();

    // Handle the request
    if (request.indexOf("/on") != -1) {
      digitalWrite(bulbPin, HIGH);
    } else if (request.indexOf("/off") != -1) {
      digitalWrite(bulbPin, LOW);
    }

    // Send the HTTP response
    client.println("HTTP/1.1 200 OK");
    client.println("Content-Type: text/html");
    client.println(""); // End of headers
    client.println("<!DOCTYPE HTML>");
    client.println("<html>");
    client.println("<h1>ESP8266 Bulb Control</h1>");
    client.println("<p>Bulb is currently: </p>");

    // Display the bulb status
    if (digitalRead(bulbPin) == HIGH) {
      client.println("<p><strong>On</strong></p>");
    } else {
      client.println("<p><strong>Off</strong></p>");
    }
    client.println("<br><br>");
    client.println("<a href=\"/on\"><button>Turn On</button></a>");
    client.println("<a href=\"/off\"><button>Turn Off</button></a>");
    client.println("</html>");

    delay(1);
    Serial.println("Client disconnected");
    Serial.println("");
  }
}
