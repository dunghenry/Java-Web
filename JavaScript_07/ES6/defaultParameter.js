// function logger(log){
//     if(typeof log === 'undefined'){
//         log = "default";
//     }
//     console.log(log);
// }
// logger();

function logger(log, type = 'log') {
    console[type](log)
}
logger("Message", 'warn')

const message = (msg = "Default") => console.log(msg)
message();