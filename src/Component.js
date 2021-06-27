"use strict";

const COMPONENT_WEAPON = 0;
const COMPONENT_SHIELDS = 1;

class Component{
    constructor(){
        this.weight = 10;
        this.typeID;
    }

    toString(){
        switch(this.typeID){
            case COMPONENT_WEAPON: return "Weapon - " + this.attackPower;
            case COMPONENT_SHIELDS: return "Shields - " + this.shieldRegen;
        }
    }
}

}

function createWeapon(attackPower){
    let weapon = new Component();
    weapon.typeID = COMPONENT_WEAPON;
    weapon.attackPower = attackPower;
    return weapon;
}

function createShields(shieldRegen){
    let shields = new Component();
    shields.typeID = COMPONENT_SHIELDS;
    shields.shieldRegen = shieldRegen;
    return shields;
}
