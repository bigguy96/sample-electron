'use strict';

const electron = require('electron');
const BrowserWindow = electron.remote.BrowserWindow;
const text = document.getElementById('text');
const button = document.getElementById('open');
let otherWindow;

button.addEventListener('click', () => {
    createWindow('./message.html', text.value);
});

function createWindow(path, id) {
    otherWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: true,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    let Data = {
        id: id,                    
    };

    otherWindow.webContents.on('did-finish-load', () => {
        otherWindow.webContents.send('message', Data);
    });

    otherWindow.on('close', () => {
        otherWindow = null;
    });

    otherWindow.loadFile(path);    
    otherWindow.show();
}