"use strict";

class GameManager{
    constructor(){
        this.logMessage("You are entering into battle against another mech.");
        this.logMessage("What do you do?");
        this.logMessage(">attack");
        this.logMessage(">defend");
    }

    takeAction(command){
        let action = interpreter.interpretString(command);
        switch(action){
            case COMMAND_ATTACK: mechaController.attack(battle.mecha1, battle.mecha2); break;
            case COMMAND_DEFEND: this.logMessage("Not implemented yet."); break;
        }
        this.logMessage("Your health: ("+battle.mecha1.health+", "+battle.mecha1.shields+")");
        this.logMessage("Enemy health: ("+battle.mecha2.health+", "+battle.mecha2.shields+")");
    }

    logMessage(message){
        $("lblLog").innerHTML += message+"<br>";
    }
}

let gameManager = new GameManager();

let lastCommand = "";
$("txtCommand").onkeyup = function(e){
    //ENTER key
    if (e.keyCode == 13){
        lastCommand = $("txtCommand").value;
        gameManager.takeAction($("txtCommand").value);
        $("txtCommand").value = "";
    }
    //up arrow
    if (e.keyCode == 38){
        let switchVar = $("txtCommand").value;
        $("txtCommand").value = lastCommand;
        lastCommand = switchVar;
    }
}
