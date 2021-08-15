var keypress = require('keypress');
const exec = require('child_process').exec;
keypress(process.stdin);
// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
    //console.log('got "keypress"', key);
    if (key.name == 'x') {
        console.log("CONECTAR A FIRESTICK"); 
        //ejecutarComando("adb kill-server");
        //ejecutarComando("adb start-server");
        //ejecutarComando("adb connect 192.168.0.13");
        ejecutarComando("connect.cmd");//ejecutar un archivo con los comandos de conexion, aqui se deberia poner la ip del firestick que corresponda
    }
    if (key.name == 'd') {
        console.log("DESCONECTAR DE FIRESTICK"); 
        //ejecutarComando("adb disconnect");
        //ejecutarComando("adb kill-server");
        ejecutarComando("disconnect.cmd");//ejecutar un archivo con los comandos de desconexion 
    }

    //AQUI SE PODRIAN DEFINIR LAS TECLAS QUE SE QUIERAN PARA EJECUTAR CADA COMANDO
    if (key.name == 'up')    { ejecutarComando("adb shell input keyevent 19");   console.log("ARRIBA");    }
    if (key.name == 'down')  { ejecutarComando("adb shell input keyevent 20");   console.log("ABAJO");     }
    if (key.name == 'left')  { ejecutarComando("adb shell input keyevent 21");   console.log("IZQUIERDA"); }
    if (key.name == 'right') { ejecutarComando("adb shell input keyevent 22");   console.log("DERECHA");   }
     
    if (key.name == 'return'){ ejecutarComando("adb shell input keyevent 66");  console.log("ENTER");      }
    if (key.name == 'escape'){ ejecutarComando("adb shell input keyevent 4");   console.log("BACK");       }
    if (key.name == 'space') { ejecutarComando("adb shell input keyevent 3");   console.log("HOME");       }
    if (key.name == 's')     { ejecutarComando("adb shell input keyevent 6");   console.log("SUSPENDER");  }
    
    if (key.name == 'b')     { ejecutarComando("adb shell input keyevent 23");  console.log("PAUSE/START");}//or 62 OR 79 OR 85 OR 86 OR 96

    if (key.name == 'e')     { ejecutarComando("adb shell input keyevent 88");  console.log("ATRAS");      }
    if (key.name == 'r')     { ejecutarComando("adb shell input keyevent 87");  console.log("DELANTE");    }


    if (key && key.ctrl && key.name == 'c') {process.stdin.pause(); }
});

process.stdin.setRawMode(true);
process.stdin.resume();

function ejecutarComando(comando) {
    const myShellScript = exec(comando);
    myShellScript.stdout.on('data', (data) => {   console.log(data);    });
    myShellScript.stderr.on('data', (data) => {   console.error(data);  });
}