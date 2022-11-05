import { BrowserWindow } from 'electron'
import { EventEmitter } from 'events'
import { createWindow } from './helpers';


class MainWindow extends EventEmitter {
    constructor(isProd) {
        super();
        this.port = process.argv[2];
        this.name = 'MainWindow';
        this.url = `http://localhost:${this.port}/home`;
        this.properties = {
            width: 1200,
            height: 1000,
            autoHideMenuBar: false,
            backgroundColor: '#2E3138',
            darkTheme: true,
            show: false,
            webPreferences: { 
                nodeIntegration: true,
                enableRemoteModule: true,
                backgroundThrottling: false,
            }
        }; 
        this.isProd = isProd  

        this.initialize()  
    }

    async initialize() {
        console.log(`${this.name}: Initialize.`);
        this.window = createWindow('main',this.properties)
        this.window.webContents.on('did-finish-load', () => {
            this.isReady = true;
            this.emit('ready');
        });

        if (this.isProd) { 
            await this.window.loadURL('app://./home.html')
        } else {
          await this.window.loadURL(`http://localhost:${this.port}/home`);
        }
    } 

    reload(force) {
        ipcMain.once('proceed-with-reload', async () => {
            this.emit('reload');

            await this.onClose();

            force ?
                this.window.webContents.reloadIgnoringCache() :
                this.window.webContents.reload();

            this.emit('reloaded');
        });

        this.emit('reload-requested');
    }

    show() {
        this.window.setMenuBarVisibility(true);
        this.window.webContents.openDevTools();
        this.window?.show();
    }

    async close() {
        this.emit('close');
        this.window?.removeAllListeners();
        this.window?.close();
        this.emit('closed');
    }

    send(channel, payload) {
        this.window?.webContents.send(channel, payload);
    }
}

export default MainWindow











