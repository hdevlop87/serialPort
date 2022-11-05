import { Duplex } from 'stream'
import { autoDetect } from "@serialport/bindings-cpp";
const binding = autoDetect();

const allocNewReadPool = (poolSize) => {
    const pool = Buffer.allocUnsafe(poolSize)
        ; (pool).used = 0
    return pool
}
const strTobuffer = (text) => Buffer.from(text, "utf8");


class SerialPort extends Duplex {
    constructor(options) {
        super();
        this.opening = false
        this.closing = false;

        const settings = {
            endOnClose: false,
            highWaterMark: 64 * 1024,
            ...options,
        }

        if (!settings.path) {
            throw new TypeError(`"path" is not defined: ${settings.path}`)
        }

        if (typeof settings.baudRate !== 'number') {
            throw new TypeError(`"baudRate" must be a number: ${settings.baudRate}`)
        }

        this.settings = settings;
        this._pool = allocNewReadPool(this.settings.highWaterMark)

        // if (this.settings.autoOpen) {
        //     this.open()
        // }
    }

    static listPorts = async () => {
        return await binding.list();
    }

    //==================== Close and Open Port ======================//

    async open() {
        const {...openOptions } = this.settings
        this.port = await binding.open(openOptions)
    }

    async close() {
        await this.port.close();
    }

    async update(baud) {
        await this.port.update({ baudRate: baud });
    }

    async flush() {
        await this.port.flush()
    }

    async write(data) {
        if (Array.isArray(data)) {
            data = Buffer.from(data)
        }
        await this.port.write(strTobuffer(data));
    }

    _read() {

        if (!this.isOpen || !this.port) {
            this.once('open', () => {
                this._read()
            })
            return
        }

        const bytesToRead = 256
        const pool = this._pool
        const toRead = Math.min(pool.length - pool.used, bytesToRead)
        const start = pool.used

        this.port.read(pool, 0, toRead).then(
            ({ bytesRead }) => {
                if (bytesRead === 0) {
                    this.push(null)
                    return
                }
                this.push(pool.subarray(start, start + bytesRead))
            }
        )
    }

    //====================== get port settings ======================//

    get isOpen() {
        return this.port?.isOpen ?? false
    }
 
    get baudRate() {
        return this.settings.baudRate
    }

    get path() {
        return this.settings.path
    }

    async get() {
        return await this.port.get();
    }
}

export default SerialPort