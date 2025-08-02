const os = require('os');

const sysemData = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    homedir1: os.homedir
    
}