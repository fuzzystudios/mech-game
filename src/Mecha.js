"use strict";

class Mecha{
    constructor(){
        this.health = 100;
        this.shields = 100;
        this.power = 100;
        this.powerDiverter = new PowerDiverter();
        this.components = [];
    }

    getWeapons(){
        return this.components.filter(w => w.typeID == COMPONENT_WEAPON);
    }

    getShields(){
        return this.components.filter(s => s.typeID == COMPONENT_SHIELDS);
    }
}

function createMecha(){
    let mecha = new Mecha();
    mecha.components.push(createWeapon(10));
    mecha.components.push(createWeapon(10));
    mecha.components.push(createShields(7));
    return mecha;
}
