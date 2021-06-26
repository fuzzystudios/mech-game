"use strict";

class Mecha{
    constructor(){
        this.health = 100;
        this.shields = 100;
        this.attack = 10;
        this.shieldRegen = 7;
        this.power = 100;
        this.powerDiverter = new PowerDiverter();
    }
}
