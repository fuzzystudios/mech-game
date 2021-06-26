"use strict";

class MechaController{
    constructor(){}

    attack(attacker, defender){
        let attackPower = attacker.attack * attacker.powerDiverter.divertList[SYSTEM_ATTACK] / 100;
        if (defender.shields > 0){
            defender.shields -= attackPower;
            defender.shields = round2(defender.shields);
            if (defender.shields < 0){
                defender.shields = 0;
            }
        }
        else{
            defender.health -= attackPower;
            defender.health = round2(defender.health);
            if (defender.health < 0){
                defender.health = 0;
            }
        }
    }

    regenShields(mecha){
        mecha.shields += mecha.shieldRegen * mecha.powerDiverter.divertList[SYSTEM_SHIELDS] / 100;
        mecha.shields = round2(mecha.shields);
        if (mecha.shields > 100){
            mecha.shields = 100;
        }
    }
}

let mechaController = new MechaController();
