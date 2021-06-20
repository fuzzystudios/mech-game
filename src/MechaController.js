"use strict";

class MechaController{
    constructor(){}

    attack(attacker, defender){
        if (defender.shields > 0){
            defender.shields -= attacker.attack;
            if (defender.shields < 0){
                defender.shields = 0;
            }
        }
        else{
            defender.health -= attacker.attack;
            if (defender.health < 0){
                defender.health = 0;
            }
        }
    }
}

let mechaController = new MechaController();
