import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  logLevel: LogLevel;
  isTimeStampEnabled:boolean=true;

  constructor() { }

  info(msg: string, ...params:any[]){
    console.info(this.formatMessageForLog(msg,params));
  }
  debug(msg: string, ...params:any[]){
    console.debug(this.formatMessageForLog(msg,params));
  }
  log(msg: string, ...params:any[]){
    console.log(this.formatMessageForLog(msg,params));
  }
  error(msg: string, ...params:any[]){
    console.error(this.formatMessageForLog(msg,params));
  }
  warn(msg: string, ...params:any[]){
    console.warn(this.formatMessageForLog(msg,params));
  }

  private getTimeStamp():string{
    let currentTimestamp:Date = new Date();
    const days:string[]=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    let currentTimeStampString = `${currentTimestamp.getFullYear()}:${currentTimestamp.toLocaleString('en',{month:'long'})}:${days[currentTimestamp.getDay() - 1]}:${currentTimestamp.getHours()}:${currentTimestamp.getMinutes()}:${currentTimestamp.getSeconds()}:`;
    return currentTimeStampString;
  }
  private formatMessageForLog(msg:string, ...params:any[]):string{
    let messageWithTimeStamp:string = this.isTimeStampEnabled?this.getTimeStamp()+" "+msg:msg;
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

enum LogLevel{
 All= 0,
 debug = 1,
 info = 2,
 warn = 3,
 error = 4
}
