/**
 * RI 1 - Comparação de Personagens Vingadores e Thanos
 * Objetivo: Criar objetos para os personagens, armazená-los em um Array
 * e comparar seus atributos usando laços de repetição.
 * Matéria: Programação Orientada a Objetos (POO).
 */


class Personagem {
    constructor(nome, codinome, armaPrincipal, armaSecundaria, velocidade, forca, resistencia) {
        this.nome = nome;
        this.codinome = codinome;
        this.armaPrincipal = armaPrincipal;
        this.armaSecundaria = armaSecundaria;
        this.velocidade = velocidade;
        this.forca = forca;
        this.resistencia = resistencia;
    }

    /**
     * Método para imprimir a descrição, seguindo a estrutura da atividade.
     */
    descricao() {
        return `
Nome do personagem: ${this.nome}
Codinome do personagem: ${this.codinome}
Arma principal: ${this.armaPrincipal}
Arma secundaria: ${this.armaSecundaria}
Nível de força: ${this.forca}
Nível de velocidade: ${this.velocidade}
Nível de resistência: ${this.resistencia}
        `.trim();
    }

    /**
     * Implementa a lógica de comparação DENTRO da classe.
     * Retorna um objeto com os resultados e o vencedor geral do confronto de 3 atributos.
     */
    compararCom(oponente) {
        const atributos = ["velocidade", "forca", "resistencia"];
        let vitP1 = 0;
        let vitP2 = 0;
        const detalhes = [];

        atributos.forEach(atributo => {
            const valorP1 = this[atributo];
            const valorP2 = oponente[atributo];
            const atributoFormatado = atributo.charAt(0).toUpperCase() + atributo.slice(1);

            let resultado;
            if (valorP1 > valorP2) {
                resultado = `${this.codinome} VENCE em ${atributoFormatado} (V: ${valorP1} > D: ${valorP2})`;
                vitP1++;
            } else if (valorP2 > valorP1) {
                resultado = `${oponente.codinome} VENCE em ${atributoFormatado} (V: ${valorP2} > D: ${valorP1})`;
                vitP2++;
            } else {
                resultado = `Empate em ${atributoFormatado} (${valorP1} = ${valorP2})`;
            }
            detalhes.push(`   • ${resultado}`);
        });

        let vencedorGeral = null;
        if (vitP1 > vitP2) {
            vencedorGeral = this.codinome;
        } else if (vitP2 > vitP1) {
            vencedorGeral = oponente.codinome;
        }

        return {
            p1: this.codinome,
            p2: oponente.codinome,
            detalhes: detalhes,
            vitP1: vitP1,
            vitP2: vitP2,
            vencedorGeral: vencedorGeral // null se for empate
        };
    }
}


// Criação dos objetos
const capitaoAmerica = new Personagem("Steve Rogers", "Capitão América", "Escudo americano", "", 85, 75, 80);
const homemDeFerro = new Personagem("Tony Stark", "Homem de Ferro", "Armadura Mark", "Raio Repulsor", 70, 95, 85);
const thor = new Personagem("Thor Odinson", "Deus do Trovão", "Mjolnir/Stormbreaker", "", 90, 100, 95);
const hulk = new Personagem("Bruce Banner", "Hulk", "Força Bruta", "", 60, 100, 100);
const viuvanegra = new Personagem("Natasha Romanoff", "Viúva Negra", "Bastões de Choque", "Pistolas", 90, 65, 70);
const capitaMavel = new Personagem("Carol Danvers", "Capitã Marvel", "Poder Cósmico", "", 95, 95, 95);
const thanos = new Personagem("Thanos", "Titã Louco", "Manopla do Infinito", "", 80, 100, 100);


const vingadores = [
    capitaoAmerica, homemDeFerro, thor, hulk, viuvanegra, capitaMavel, thanos
];


/**
 * Função principal para iterar sobre todos os pares e imprimir o resultado, 
 * além de calcular o ranking geral.
 */
function executarComparacoes(personagens) {
    console.log("=========================================================");
    console.log("          RI 1: ANÁLISE DE CONFRONTOS (V4.0)");
    console.log("=========================================================");

    // Estrutura para rastrear o placar geral de vitórias de atributos
    const placarGeral = {};
    personagens.forEach(p => placarGeral[p.codinome] = 0); // Inicializa todos com 0

    // --- Execução das Comparações Pares ---
    for (let i = 0; i < personagens.length; i++) {
        const p1 = personagens[i];

        for (let j = i + 1; j < personagens.length; j++) {
            const p2 = personagens[j];

            const resultado = p1.compararCom(p2);

            // Atualiza o Placar Geral
            if (resultado.vencedorGeral) {
                 placarGeral[resultado.vencedorGeral]++; // Adiciona 1 vitória para o vencedor do confronto (melhor de 3)
            }
            
            // Impressão dos Detalhes do Confronto
            console.log(`\n### ⚔️ CONFRONTO: ${p1.codinome} vs ${p2.codinome} ⚔️ ###`);
            console.log(`\nDescrição de ${p1.codinome}:\n${p1.descricao()}`);
            console.log(`\nDescrição de ${p2.codinome}:\n${p2.descricao()}`);
            
            console.log("\n--- DETALHES POR ATRIBUTO ---");
            resultado.detalhes.forEach(detalhe => console.log(detalhe));

            console.log("\n🏆 VENCEDOR GERAL (Melhor de 3 Atributos):");
            if (!resultado.vencedorGeral) {
                console.log(`   ⚖️ EMPATE GERAL! Ambos venceram ${resultado.vitP1} atributos.`);
            } else {
                console.log(`   O VENCEDOR É: **${resultado.vencedorGeral}** (Placar: ${resultado.vitP1} a ${resultado.vitP2})`);
            }
            console.log("-------------------------------------------------------------");
        }
    }

    // --- Geração do Ranking Top 3 ---
    
    // Converte o objeto de placar em um Array de objetos para facilitar a ordenação
    const rankingArray = Object.keys(placarGeral).map(codinome => {
        return { 
            codinome: codinome, 
            vitorias: placarGeral[codinome] 
        };
    });

    // Ordena o array em ordem decrescente de vitórias
    rankingArray.sort((a, b) => b.vitorias - a.vitorias);

    console.log("\n\n=========================================================");
    console.log("              🥇 RANKING FINAL DE CONFRONTOS 🥈");
    console.log("  (Vitórias em confrontos, melhor de 3 atributos)");
    console.log("=========================================================");

    const top3 = rankingArray.slice(0, 3);
    
    if (top3.length > 0) {
        top3.forEach((heroi, index) => {
            let simbolo;
            if (index === 0) simbolo = "🥇";
            else if (index === 1) simbolo = "🥈";
            else simbolo = "🥉";

            console.log(`${simbolo} #${index + 1}: ${heroi.codinome} (Total de vitórias: ${heroi.vitorias})`);
        });
    } else {
        console.log("Nenhum confronto foi realizado para gerar o ranking.");
    }
    
    console.log("=========================================================");
}

// Inicia a execução
executarComparacoes(vingadores);