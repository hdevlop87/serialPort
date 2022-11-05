import { BrowserWindow } from 'electron'
import { EventEmitter } from 'events'
import {join} from 'path'

class SplashWindow extends EventEmitter {

    constructor() {
        super();
        this.name = 'SplashWindow';
        this.url = '../splashScreen/index.html';
        this.properties = {
            width: 440,
            height: 340,
            backgroundColor: '#2E3138', 
            resizable: false,
            minimizable: false,
            focusable: false,
            frame: false,
            darkTheme: true,
            show: false,
            webPreferences: {
                nodeIntegration: true,
                enableRemoteModule: true
            }
        };

        this.initialize()
    }

    initialize() {
        this.window = new BrowserWindow(this.properties)
        this.window.setMenuBarVisibility(false);
        this.window.webContents.on('did-finish-load', () => {
            this.isReady = true;
            this.emit('ready');
        });

        this.window.loadFile(join(__dirname, this.url))
    }

    show() {
        this.window?.show();
    }

    async close() {
        this.window?.removeAllListeners();
        this.window?.close();
        this.emit('closed');
    }
}

export default SplashWindow 