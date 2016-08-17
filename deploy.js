var APP_NAME = "HelloWorld";
var APP_ID   = "org.marinacci.joshua.HelloWorld";
var OUTPUT = "output";
var IP_ADDRESS = "192.168.0.130";

// don't edit below here

var CH = require('child_process');
var path = require('path');


var OUTDIR = path.join(OUTPUT,APP_ID);
var REMOTE_PATH = path.join("/Volumes",IP_ADDRESS,APP_ID);

function doExec(command, args) {
  return new Promise((resolve,reject)=>{
    //console.log("executing",command,args);
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

doExec("node",["node_modules/cola-tools/bubbler",
  "build",
  "--development",
  "--source",APP_NAME,
  "--destination",
  OUTPUT])
  .then(()=>{
    return doExec("rm",["-rf",REMOTE_PATH])
  })
  .then(()=>{
    return doExec("cp",["-r",OUTDIR,REMOTE_PATH])
  })
  .then(()=>{
    console.log("done");
  }).catch((e)=> {
    console.log(e);
  });
