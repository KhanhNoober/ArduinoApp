#define redLed D7
#define yellowLed D8
#define greenLed D9

char ledState = '0';

void setup() {
  pinMode(redLed, OUTPUT);
  pinMode(yellowLed, OUTPUT);
  pinMode(greenLed, OUTPUT);
  Serial.begin(9600);
}

void loop() {
  if(Serial.available() > 0) {
    ledState = Serial.read();
    setLight(ledState);
    response();
  }
}

void response() {
  Serial.printf("\n%d %d %d", digitalRead(redLed), digitalRead(yellowLed), digitalRead(greenLed));
}

void setLight(char state) {
  if (state == '1') {
    digitalWrite(redLed, !digitalRead(redLed));
  }
  else if (state == '2') {
    digitalWrite(yellowLed, !digitalRead(yellowLed));
  }
  else if (state == '3') {
    digitalWrite(greenLed, !digitalRead(greenLed));
  }
}