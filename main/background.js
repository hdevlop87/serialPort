import SplashWindow from './SplashWindow';
import { app, ipcMain } from 'electron';
import MainWindow from './MainWindow';
import serve from 'electron-serve';
import Ports from './Ports.js';
import delay from 'delay';




const isProd = process.env.NODE_ENV === 'production';

if (isProd) {
   serve({ directory: 'app' }); 
} else {
   app.setPath('userData', `${app.getPath('userData')} (development)`);
}


const createWindow = () => {
   const mainWindow = new MainWindow(isProd);
   const splashWindow = new SplashWindow();
   splashWindow.on('ready', () => {
      splashWindow.show(); 
   });
   
   mainWindow.on('ready', async () => {
      await delay(2000);
      splashWindow.close();
      mainWindow.show(); 
      AppStarted(mainWindow)
   });
}

app.whenReady().then(createWindow)
 
app.on('window-all-closed', () => {
   app.quit(); 
}); 

const AppStarted = (win) => {
   
   const ports = new Ports(win) 
     
   
   ipcMain.on('openPort', async (event,setting) => {
      await ports.createPort(setting)
   });
   
   ipcMain.on('closePort',  (event,path) => { 
       ports.deletePort(path)
   });
   
   ipcMain.on('statePort',  (event,path) => {
      ports.getStatePort(path)
   });
}

