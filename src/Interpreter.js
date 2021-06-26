"use strict";

const COMMAND_ATTACK = 0;
const COMMAND_DEFEND = 1;
const COMMAND_DIVERT = 2;

class Interpreter{
    constructor(){

    }

    interpretString(commandString){
        let commands = commandString.toLowerCase().split(" ");
        let command = {};
        switch(commands[0]){
            case "attack": command.action = COMMAND_ATTACK; break;
            case "defend": command.action = COMMAND_DEFEND; break;
            case "divert":
                command.action = COMMAND_DIVERT;
                switch(commands[1]){
                    case "attack": command.system = SYSTEM_ATTACK; break;
                    case "shields": command.system = SYSTEM_SHIELDS; break;
                }
                command.amount = commands[2] * 1;
        }
        return command;
    }
}

let interpreter = new Interpreter();
// console.log("Try it!: Type 'interpreter.interpretString(\"attack-power\");'");
// console.log("Try it!: Type 'interpreter.interpretString(\"shields\");'");
