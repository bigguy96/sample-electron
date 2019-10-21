'use strict';

const {app, BrowserWindow} = require('electron');
let mainWindow;

function createWindow () {
    mainWindow = new BrowserWindow({        
        webPreferences: { nodeIntegration: true },
        show: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile('index.html');

    //maximize
    mainWindow.maximize();
    mainWindow.show();

    // Open the DevTools.
    //mainWindow.webContents.openDevTools();

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {    
        mainWindow = null;
    });
}

app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', () => {    
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {    
    if (mainWindow === null) createWindow();
});

//https://coursetro.com/posts/code/120/Creating-and-Using-Windows-in-Electron