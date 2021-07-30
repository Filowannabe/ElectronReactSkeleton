import { BrowserWindow, app } from 'electron';
import exportData from "./repositories/ScheduleRepository"
import * as path from "path";
const { ipcMain } = require('electron');

ipcMain.on('request', async (event, args) => {
    console.log(args)
    const dataToFind = await exportData();
    event.reply('response', dataToFind)
});

let window: Electron.BrowserWindow | null;
function createWindow() {
    window = new BrowserWindow({
        width: 900,
        height: 700,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false
        }
    });
    window.loadFile(path.join(__dirname, "index.html"));
}

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow);

module.exports = {
    createWindow
}