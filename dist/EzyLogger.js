"use strict";
// src/Logger.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.EzyLogger = void 0;
class EzyLogger {
    constructor(level = 'info') {
        this.level = level;
    }
    shouldLog(messageLevel) {
        const levels = ['debug', 'info', 'warn', 'error'];
        return levels.indexOf(messageLevel) >= levels.indexOf(this.level);
    }
    log(level, message) {
        if (this.shouldLog(level)) {
            console.log(`[${level.toUpperCase()}] ${message}`);
        }
    }
    debug(message) {
        this.log('debug', message);
    }
    info(message) {
        this.log('info', message);
    }
    warn(message) {
        this.log('warn', message);
    }
    error(message) {
        this.log('error', message);
    }
}
exports.EzyLogger = EzyLogger;
