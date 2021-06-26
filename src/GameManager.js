"use strict";

class GameManager{
    constructor(){
        this.logMessage("You are entering into battle against another mech.");
        this.logMessage("What do you do?");
        this.logMessage("- divert attack 50");
        this.logMessage("- divert shields 50");
        this.logMessage("- go");
    }

    takeAction(commandString){
        this.logMessage(">> " + commandString);
        let command = interpreter.interpretString(commandString);
        switch(command.action){
            case COMMAND_GO: this.processGameStep(); break;
            case COMMAND_DIVERT:
                battle.mecha1.powerDiverter.divertPower(command.system, command.amount);
                break;
        }
        //2021-06-26: copied from https://stackoverflow.com/a/33193668/2336212
        let element = $("lblLog");
        element.scrollTop = element.scrollHeight - element.clientHeight;
    }

    processGameStep(){
        mechaController.attack(battle.mecha1, battle.mecha2);
        mechaController.attack(battle.mecha1, battle.mecha2);
        mechaController.attack(battle.mecha2, battle.mecha1);
        mechaController.attack(battle.mecha2, battle.mecha1);
        mechaController.regenShields(battle.mecha1);
        mechaController.regenShields(battle.mecha2);
        if (battle.mecha1.health == 0){
            this.logMessage("Enemy wins!");
        }
        else if (battle.mecha2.health == 0){
            this.logMessage("You win!");
        }
        else{
            this.logMessage("Your health: ("+battle.mecha1.health+", "+battle.mecha1.shields+")");
            this.logMessage("Enemy health: ("+battle.mecha2.health+", "+battle.mecha2.shields+")");
        }
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
