'use strict';

const ipc = require('electron').ipcRenderer;
const electron = require('electron');
const remote = electron.remote;
const currentWindow = remote.getCurrentWindow();
const text = document.getElementById('text');
const closeButton = document.getElementById('close');


ipc.on('message', (event, data) => {
    console.log(data);
    
    text.value = data.id;
});

closeButton.addEventListener('click', () => {
    currentWindow.close();
});