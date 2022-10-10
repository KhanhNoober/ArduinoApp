//import dependencies
const { SerialPort }  = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');

//create a new serial port object
const port = new SerialPort({ 
    path: 'COM3',
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
port.on('data', (data) => {
    let enc = new TextDecoder("utf-8");
    let inputs = enc.decode(data).replace(/[^0-9 ]/g, "").split(' ');
    console.log(inputs);
    changeButtonRed({state: inputs[0] == '1', message: inputs[0] == '1' ? 'ON' : 'OFF'});
    changeButtonYellow({state: inputs[1] == '1', message: inputs[1] == '1' ? 'ON' : 'OFF'});
    changeButtonGreen({state: inputs[2] == '1', message: inputs[2] == '1' ? 'ON' : 'OFF'});
});

const changeButtonRed = (state) => {
    redLed.innerText = state.message;
    redLed.classList.remove(state.state ? 'btn-danger' : 'btn-success');
    redLed.classList.add(state.state ? 'btn-success' : 'btn-danger');
}

const changeButtonYellow = (state) => {
    yellowLed.innerText = state.message;
    yellowLed.classList.remove(state.state ? 'btn-danger' : 'btn-success');
    yellowLed.classList.add(state.state ? 'btn-success' : 'btn-danger');
}

const changeButtonGreen = (state) => {
    greenLed.innerText = state.message;
    greenLed.classList.remove(state.state ? 'btn-danger' : 'btn-success');
    greenLed.classList.add(state.state ? 'btn-success' : 'btn-danger');
}


const redLed = document.getElementById('1');
const yellowLed = document.getElementById('2');
const greenLed = document.getElementById('3');

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

port.write('Hello from Node.js!');