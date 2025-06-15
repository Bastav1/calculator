"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = random;
function random() {
    let str = "";
    for (let i = 0; i < 10; i++) {
        str += 'a' + Math.ceil(Math.random() * 100);
    }
    let s2 = "";
    for (let i = 0; i < 10; i++) {
        s2 += str[i];
    }
    return s2;
}
