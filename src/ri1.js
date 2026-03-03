/**
 * RI 1 - Comparação de Personagens Vingadores e Thanos
 * Objetivo: Criar objetos para os personagens, armazená-los em um Array
 * e comparar seus atributos usando laços de repetição.
 * Matéria: Programação Orientada a Objetos (POO).
 */


// Array que armazenará todos os personagens
const vingadores = [];

// 1. Criação dos Objetos (Heróis e Vilão)
const capitãoAmérica = {
    nome: "Steve Rogers",
    codinome: "Capitão América",
    armaPrincipal: "Escudo de Vibranium",
    armaSecundaria: "",
    velocidade: 85,
    forca: 75,
    resistencia: 80,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const homemDeFerro = {
    nome: "Tony Stark",
    codinome: "Homem de Ferro",
    armaPrincipal: "Armadura Mark 85",
    armaSecundaria: "IA Jarvis/Friday",
    velocidade: 90,
    forca: 85,
    resistencia: 85,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const thor = {
    nome: "Thor Odinson",
    codinome: "Thor",
    armaPrincipal: "Mjölnir",
    armaSecundaria: "Stormbreaker",
    velocidade: 80,
    forca: 100,
    resistencia: 95,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const hulk = {
    nome: "Bruce Banner",
    codinome: "Hulk",
    armaPrincipal: "Punhos",
    armaSecundaria: "",
    velocidade: 70,
    forca: 100,
    resistencia: 100,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const viuvaNegra = {
    nome: "Natasha Romanoff",
    codinome: "Viúva Negra",
    armaPrincipal: "Bastões de choque",
    armaSecundaria: "Pistolas",
    velocidade: 90,
    forca: 60,
    resistencia: 70,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const gaviaoArqueiro = {
    nome: "Clint Barton",
    codinome: "Gavião Arqueiro",
    armaPrincipal: "Arco e Flechas",
    armaSecundaria: "Espada Ronin",
    velocidade: 85,
    forca: 65,
    resistencia: 70,
    descricao: function () {
        return  "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

const thanos = {
    nome: "Thanos",
    codinome: "Titã Louco",
    armaPrincipal: "Manopla do Infinito",
    armaSecundaria: "Espada Dupla",
    velocidade: 75,
    forca: 95,
    resistencia: 98,
    descricao: function () {
        return "Nome: " + this.nome + "\n" +
        "Codinome: " + this.codinome + "\n" +
        "Arma Principal: " + this.armaPrincipal + "\n" +
        "Velocidade: " + this.velocidade + "\n" +
        "Força: " + this.forca + "\n" +
        "Resistência: " + this.resistencia;
    }
};

// Adicionando todos ao Array
vingadores.push(capitãoAmérica, homemDeFerro, thor, hulk, viuvaNegra, gaviaoArqueiro, thanos);

// 2. Lógica de Comparação
console.log("--- INICIANDO COMPARAÇÃO DE PERSONAGENS ---\n");

// Comparamos cada personagem com todos os outros no array
for (let i = 0; i < vingadores.length; i++) {
    for (let j = i + 1; j < vingadores.length; j++) {
        let p1 = vingadores[i];
        let p2 = vingadores[j];

        console.log("------------------------------------------");
        console.log(`CONFRONTO: ${p1.codinome} VS ${p2.codinome}`);
        console.log("------------------------------------------");
        
        // Exibindo descrições
        console.log(p1.descricao());
        console.log("\nVERSUS\n");
        console.log(p2.descricao());
        console.log("\n--- RESULTADO DA COMPARAÇÃO ---");

        // Comparação de Atributos
        const atributos = ["forca", "velocidade", "resistencia"];
        
        atributos.forEach(attr => {
            if (p1[attr] > p2[attr]) {
                console.log(`[${attr.toUpperCase()}]: ${p1.codinome} vence (${p1[attr]} vs ${p2[attr]})`);
            } else if (p2[attr] > p1[attr]) {
                console.log(`[${attr.toUpperCase()}]: ${p2.codinome} vence (${p2[attr]} vs ${p1[attr]})`);
            } else {
                console.log(`[${attr.toUpperCase()}]: Empate técnico (${p1[attr]})`);
            }
        });
        console.log("\n");
    }
}