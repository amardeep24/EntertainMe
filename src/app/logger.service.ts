import { Injectable } from '@angular/core';

const DAYS:string[]=['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

@Injectable()
export class LoggerService {

  logLevel: LogLevel;
  isTimeStampEnabled:boolean=true;

  constructor() { }

  info(msg: string, ...params:any[]){
    console.info(this.formatMessageForLog(msg,LogLevel.info,params));
  }
  debug(msg: string, ...params:any[]){
    console.debug(this.formatMessageForLog(msg,LogLevel.debug,params));
  }
  log(msg: string, ...params:any[]){
    console.log(this.formatMessageForLog(msg,LogLevel.log,params));
  }
  error(msg: string, ...params:any[]){
    console.error(this.formatMessageForLog(msg,LogLevel.error,params));
  }
  warn(msg: string, ...params:any[]){
    console.warn(this.formatMessageForLog(msg,LogLevel.error,params));
  }

  private getTimeStamp():string{
    let currentTimestamp:Date = new Date();
    let currentTimeStampString = `${currentTimestamp.getFullYear()}:${currentTimestamp.toLocaleString('en',{month:'long'})}:${DAYS[currentTimestamp.getDay()]}:${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}:${currentTimestamp.getSeconds()}:`;
    return currentTimeStampString;
  }
  private formatMessageForLog(msg:string,logLevel:string,...params:any[]):string{
    let messageWithTimeStamp:string = this.isTimeStampEnabled?this.getTimeStamp()+": "+logLevel+": "+msg:msg;
    let messgeToLog:string = params?messageWithTimeStamp+" "+this.getStringFromParams(params):messageWithTimeStamp;
    return messgeToLog;
  }
  private getStringFromParams(...params:any[]){
    let paramString:string;
    params.forEach((obj)=>{
      if(typeof obj ==="object"){
        for(let prop of obj){
          if(obj.prop){
            paramString+= " "+ obj.prop + " ";
          }
        }
      }else{
        if(obj){
          paramString+= " "+ obj + " ";
        }
      }
    });
  }

}

class LogLevel{
 public static log:string = "LOG";
 public static debug:string = "DEBUG";
 public static info:string = "INFO";
 public static warn:string = "WARN";
 public static error:string = "ERROR";
}
