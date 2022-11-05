import electron from 'electron';

const ipcRenderer = electron.ipcRenderer || false;

export const openPort = async (setting) =>
    await withTime(2000, asyncEmit('openPort',setting))

export const closePort = async (path) =>
    await withTime(2000, asyncEmit('closePort',path))

export const getStatePort = async (path) =>
    await withTime(2000, asyncEmit('statePort',path))

export const getAllPorts = async () =>
    await withTime(2000, asyncEmit('getPorts'))

const asyncEmit = async (eventName, data) => {
    return new Promise(function (resolve, reject) {
        ipcRenderer.send(eventName, data);
        ipcRenderer.on(eventName, (_event, result) => {
            if(result.type=="error"){
                reject(result);
            }
            resolve(result);
        });
    });
}

const withTime = (ms, promise) => {
    let timeout = new Promise((resolve, reject) => {
        let id = setTimeout(() => {
            clearTimeout(id);
            reject('Timed out')
        }, ms)
    })
    return Promise.race([
        promise,
        timeout
    ])
}