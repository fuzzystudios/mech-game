"use strict";

class MechaController{
    constructor(){}

    attack(attacker, defender){
        let attackPower = attacker.attack * attacker.powerDiverter.divertList[SYSTEM_ATTACK] / 100;
        if (defender.shields > 0){
            defender.shields -= attackPower;
            if (defender.shields < 0){
                defender.shields = 0;
            }
        }
        else{
            defender.health -= attackPower;
            if (defender.health < 0){
                defender.health = 0;
            }
        }
    }

    regenShields(mecha){
        mecha.shields += mecha.shieldRegen * mecha.powerDiverter.divertList[SYSTEM_SHIELDS] / 100;
        if (mecha.shields > 100){
            mecha.shields = 100;
        }
    }
}

let mechaController = new MechaController();
