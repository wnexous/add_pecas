let input = require("prompt-sync")();
const fs = require("fs");
const util = require('util');
function adicionar() {
    DB = JSON.parse(fs.readFileSync("database.json"))
    if (util.isString(nome = input("Digite o nome da peça: ").toUpperCase()) && parseInt(peso = input("Digite o peso (em KG): ")) <= 200 && parseInt(id = input("Digite o id: ")) >= 1) { //recebe as entradas do usuario
        for (i = 0; i < DB.length; i++) {
            if (DB[i]["id"] == id) { console.log('OOPS, esse id ja existe.'); adicionar(); return "finalizado."; }
        }; pecas = { "id": id, "nome": nome, "peso": peso }; DB.push(pecas);
        fs.writeFileSync("database.json", JSON.stringify(DB)); return "adicionado com sucesso!" //caso todas as informacoes forem verdadeiras, salva os dados na database
    } else { console.log("Entrada inválida."); if (input("Você deseja continuar?[s/n]: ").toLocaleLowerCase() == "n") { return "Retornado" } else { console.log('retornado.') } } //caso falso, pergunta se o usuario quer continuar a adicao
}
while (true) {
    console.log('\n1. adicionar\n2. listar as pecas\n3. sair\n') //tive que adicionar um console a mais pois adicionar todo o texto dentro do input estava bugando
    switch (input("Sua decisão: ")) {
        case '1': console.log(adicionar());console.table(JSON.parse(fs.readFileSync("database.json"))); break
        case "2": console.table(JSON.parse(fs.readFileSync("database.json"))); break
        case "3": process.exit()
        default: console.log('\n-------------\nopção invalida')
    }
}