// src/Logger.ts

export class EzyLogger {
    private level: string;
  
    constructor(level: string = 'info') {
      this.level = level;
    }
  
    private shouldLog(messageLevel: string): boolean {
      const levels = ['debug', 'info', 'warn', 'error'];
      return levels.indexOf(messageLevel) >= levels.indexOf(this.level);
    }
  
    public log(level: string, message: string): void {
      if (this.shouldLog(level)) {
        console.log(`[${level.toUpperCase()}] ${message}`);
      }
    }
  
    public debug(message: string): void {
      this.log('debug', message);
    }
  
    public info(message: string): void {
      this.log('info', message);
    }
  
    public warn(message: string): void {
      this.log('warn', message);
    }
  
    public error(message: string): void {
      this.log('error', message);
    }
  }
  