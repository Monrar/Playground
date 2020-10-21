const { exec } = require('child_process');


class KeyHandler{
    windowID = 0;
    constructor(emuName) {
        exec ('xdotool search --name '+emuName, (error, stdout) => {
            if(!error) {this.windowID = stdout.trim();}
        });

    }
    transfer(key) {
        exec ('xdotool key --window '+this.windowID+' --delay 100 '+key);
        console.log(this.windowID);
        //sleep(100);
    }
};
module.exports.KeyHandler = KeyHandler
//export default class KeyHandler {}
function transfer() {

    exec ('xdotool key --window 0x4600003 --delay 100 z');
    sleep(100);
}

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
   }