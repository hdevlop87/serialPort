import socketIO from 'socket.io-client';
const socket = socketIO.connect('http://localhost:4000');


export const openPort = async (setting) =>
    await withTime(2000, asyncEmit('openPort', setting))

export const closePort = async (path) =>
    await withTime(2000, asyncEmit('closePort', path))

export const sendToPort = async (data) =>
    await withTime(2000, asyncEmit('writePort', data))

export const getStatePort = async (path) =>
    await withTime(2000, asyncEmit('statePort', path))

export const getAllPorts = async () =>
    await withTime(2000, asyncEmit('getPorts'))

const asyncEmit = async (eventName, data) => {
    return new Promise(function (resolve, reject) {
        socket.emit(eventName, data);
        socket.on(eventName, result => {
            if (result.type == "error") {
                reject(result);
            }
            resolve(result);
            socket.off(eventName);
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