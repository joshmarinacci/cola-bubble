var APP_NAME = "HelloWorld";
var APP_ID   = "org.marinacci.joshua.HelloWorld";
var OUTPUT = "output";
var DEBUGGGER_IP_ADDRESS = "192.168.0.121";

var CH = require('child_process');
var path = require('path');

function doExec(command, args) {
  return new Promise((resolve,reject)=>{
    console.log("executing",command,args);
    const ls = CH.spawn(command, args, {stdio:'inherit'});
    ls.on('close', (code) => {
      if(code == 0) {
        resolve();
      } else {
        reject();
      }
    });

  });
}


doExec("node",[
  "node_modules/cola-tools/bubbler",
  "debugger","--connect",
  DEBUGGGER_IP_ADDRESS,
  "--source",
  APP_NAME]).then(()=>{
    console.log("done with debugging")
  }).catch((e)=> {
    console.log(e);
  });
