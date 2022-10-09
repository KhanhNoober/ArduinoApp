//import dependencies
const { SerialPort }  = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

//create a new serial port object
const port = new SerialPort({ 
    path: 'COM4',
    baudRate: 9600,
}, false);

//Handle errors
port.on('error', function(err) {
    display.innerText = 'Error: ' + err.message;
});

//create a new parser object
const parser = new ReadlineParser();
port.pipe(parser);

//read the data
parser.on('data', (data) => {
    display.innerText = data;
});

const redLed = document.getElementById('1');
const yellowLed = document.getElementById('2');
const greenLed = document.getElementById('3');
const display = document.getElementById('display');

redLed.onclick = handleRedLedClick;
yellowLed.onclick = handleYellowLedClick;
greenLed.onclick = handleGreenLedClick;

function handleRedLedClick() {
    port.write('1');
}

function handleYellowLedClick() {
    port.write('2');
}

function handleGreenLedClick() {
    port.write('3');
}
