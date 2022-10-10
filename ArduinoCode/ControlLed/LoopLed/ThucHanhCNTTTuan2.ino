#define redPin D7
#define yellowPin D8
#define greenPin D9

#define red 200
#define green 200
#define yellow 200

char state;
int count;

void setup() {
  pinMode(redPin, OUTPUT);
  pinMode(yellowPin, OUTPUT);
  pinMode(greenPin, OUTPUT);

  state = '1';
  count = red;

  Serial.begin(9600);
}

void loop() {
  setLight(state);
  delay(1);
  count -= 1;
  if(count == 0) {
    if(state == '1') {
      count = green;
      state = '3';
    }
    else if(state == '2') {
      count = red;
      state = '1';
    }
    else if(state == '3') {
      count = yellow;
      state = '2';
    }

  }
}


void setLight(char c) {
  if(c == '1') {
    digitalWrite(redPin, HIGH);
    digitalWrite(yellowPin, LOW);
    digitalWrite(greenPin, LOW);
  }
  if(c == '2') {
    digitalWrite(redPin, LOW);
    digitalWrite(yellowPin, HIGH);
    digitalWrite(greenPin, LOW);
  }
  if(c == '3') {
    digitalWrite(redPin, LOW);
    digitalWrite(yellowPin, LOW);
    digitalWrite(greenPin, HIGH);
  }
}