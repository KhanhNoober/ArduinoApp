#define ledRed D7
#define yellowRed D8
#define greenLed D9

char ledState = '0';

void setup() {
  pinMode(ledRed, OUTPUT);
  pinMode(yellowRed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0) {
    ledState = Serial.read();
    Serial.println(ledState);
    setLight(ledState);
  }
}

void setLight(char state) {
  if (state == '1') {
    digitalWrite(ledRed, HIGH);
    digitalWrite(yellowRed, LOW);
    digitalWrite(greenLed, LOW);
  }
  else if (state == '2') {
    digitalWrite(ledRed, LOW);
    digitalWrite(yellowRed, HIGH);
    digitalWrite(greenLed, LOW);
  }
  else if (state == '3') {
    digitalWrite(ledRed, LOW);
    digitalWrite(yellowRed, LOW);
    digitalWrite(greenLed, HIGH);
  }
}