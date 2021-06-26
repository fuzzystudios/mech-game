"use strict";

class GameManager{
    constructor(){
        this.logMessage("You are entering into battle against another mech.");
        this.logMessage("What do you do?");
        this.logMessage("- attack");
        this.logMessage("- defend");
        this.logMessage("- divert attack 50");
        this.logMessage("- divert shields 50");
    }

    takeAction(commandString){
        this.logMessage(">> " + commandString);
        let command = interpreter.interpretString(commandString);
        switch(command.action){
            case COMMAND_ATTACK: mechaController.attack(battle.mecha1, battle.mecha2); break;
            case COMMAND_DEFEND: this.logMessage("Not implemented yet."); break;
            case COMMAND_DIVERT:
                battle.mecha1.powerDiverter.divertPower(command.system, command.amount);
                break;
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
