"use strict";

let $ = function(elementName){
    return document.getElementById(elementName);
}

Math.clamp = function(amount, min, max){
    return Math.max(min, Math.min(amount, max));
}
