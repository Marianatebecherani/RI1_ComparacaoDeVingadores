# RI 1 - Comparação de Personagens Vingadores

Projeto da matéria de Programação Orientada a Objetos (POO) focado em JavaScript. Este exercício (RI 1) cria objetos para representar heróis Vingadores e o vilão Thanos, armazena-os em um Array e utiliza estruturas de repetição para comparar seus atributos (velocidade, força e resistência), determinando um vencedor para cada confronto e gerando um ranking final.

## ✨ Funcionalidades

-   **Estrutura Orientada a Objetos**: Utiliza uma classe `Personagem` para modelar os heróis e vilões.
-   **Comparação Dinâmica**: Compara cada personagem com todos os outros do grupo, sem repetições de pares.
-   **Lógica de Confronto**: A lógica para determinar o vencedor de um confronto (melhor de 3 atributos) está encapsulada dentro da própria classe.
-   **Relatórios Detalhados**: Exibe no console a descrição de cada personagem no confronto, o resultado por atributo e o vencedor geral.
-   **Ranking Final**: Ao final de todos os confrontos, exibe um ranking com os 3 personagens que mais venceram duelos.

## 🚀 Tecnologias Utilizadas

-   **JavaScript**: Linguagem principal do projeto.
-   **Node.js**: Ambiente de execução para o script JavaScript fora do navegador.

## 📋 Pré-requisitos

Antes de começar, você vai precisar ter o Node.js instalado em sua máquina.

## ⚙️ Como Rodar o Projeto

Siga os passos abaixo para executar a simulação de confrontos:

1.  **Clone o repositório (se ainda não o fez):**
    ```bash
    git clone https://github.com/seu-usuario/RI1_ComparacaoDeVingadores.git
    ```

2.  **Navegue até o diretório do projeto:**
    ```bash
    cd RI1_ComparacaoDeVingadores
    ```

3.  **Execute o script com o Node.js:**
    ```bash
    node src/ri1.js
    ```

Após executar o comando, o resultado de todos os confrontos e o ranking final serão exibidos diretamente no seu terminal.

## 📄 Exemplo de Saída

A saída no terminal seguirá uma estrutura parecida com esta para cada confronto:

```
### ⚔️ CONFRONTO: Capitão América vs Homem de Ferro ⚔️ ###

Descrição de Capitão América:
Nome do personagem: Steve Rogers
Codinome do personagem: Capitão América
...

--- DETALHES POR ATRIBUTO ---
   • Homem de Ferro VENCE em Forca (V: 95 > D: 75)
   ...

🏆 VENCEDOR GERAL (Melhor de 3 Atributos):
   O VENCEDOR É: **Homem de Ferro** (Placar: 1 a 2)
-------------------------------------------------------------
```
