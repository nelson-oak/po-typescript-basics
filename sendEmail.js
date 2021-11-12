"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_1 = require("./user");
// Pressione CTRL + Espaço para abrir o menu abaixo:
function sendEmail(user) {
    console.log("\n    " + user.name + " [" + user.email + "], seu pedido foi enviado para o seguinte endere\u00E7o:\n\n    Rua: " + user.address.street + "\n    N\u00FAmero: " + user.address.number + "\n    Cidade: " + user.address.city + "\n    Estado: " + user.address.state + "\n  ");
}
sendEmail(user_1.user);
