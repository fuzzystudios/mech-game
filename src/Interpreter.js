"use strict";

const COMMAND_ATTACK = 0;
const COMMAND_DEFEND = 1;

class Interpreter{
    constructor(){

    }

    interpretString(commands){
        switch(commands){
            case "attack": return COMMAND_ATTACK;
            case "defend": return COMMAND_DEFEND;
            case "attack-power": console.log("attack power increased!"); break;
            case "shields": console.log("shields increased!"); break;
        }
    }
}

let interpreter = new Interpreter();
// console.log("Try it!: Type 'interpreter.interpretString(\"attack-power\");'");
// console.log("Try it!: Type 'interpreter.interpretString(\"shields\");'");
