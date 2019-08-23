/************************************************************
Basic Blynk 
  You’ll need:
   - Blynk App (download from AppStore or Google Play)
   - ESP32 microcontroller board
*************************************************************
** Basic Blynk : Let’s turn ON your LED with Blynk. In this example we’ll use NodeMCU-32S.

** You’ll need:
  - Blynk App (download from AppStore or Google Play)
  - ESP32 microcontroller board

** Step :
  1. Connect LED to GPIO23 (check your pinout on your board)
(In the Blynk App)
  2. Create New Project and select ESP32 Dev Board
  3. Email yourself Auth Token. You can do it later at any time
  4. Add a Button Widget. Select Pin GPIO23 in Widget’s Settings
  5. Press Play icon.
(In KBIDE block mode)
  6. Open example and fill WiFi connection info and the Token from registered email.
  7. Enjoy Blynking!
 *************************************************************/

#define BLYNK_PRINT Serial // Enables Serial Monitor

// You should get Auth Token in the Blynk App.
// Go to the Project Settings (nut icon).
char auth[] = "YourAuthToken";
char ssid[] = "Your WiFi SSID";
char pass[] = "Your WiFi password";
void setup()
{
  // See the connection status in Serial Monitor
  Serial.begin(115200);

  // Here your Arduino connects to the Blynk Cloud.
  Blynk.begin(auth,ssid,pass);
}

void loop()
{
  // All the Blynk Magic happens here...
  Blynk.run();

  // You can inject your own code or combine it with other sketches.
  // Check other examples on how to communicate with Blynk. Remember
  // to avoid delay() function!
}

