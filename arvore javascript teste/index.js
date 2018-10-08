function ArvoreBinaria() {
    this.noRaiz = null;
}




ArvoreBinaria.prototype = {

    constructor: ArvoreBinaria,

    // Adiciona um novo valor
    adicionar: function (valor) {

        // Cria um novo objeto para armazenar o valor atual
        var novoNo = {
            valor: valor,
            esq: null,
            dir: null
        };

        var noAtual;

        if (this.noRaiz == null) {
            // Caso a árvore esteja vazia
            this.noRaiz = novoNo;
        } else {
            noAtual = this.noRaiz;

            while (true) {
                if (valor < noAtual.valor) {
                    // Atribuímos um novo nó a esquerda caso não exista
                    // ou seguimos adiante usando o nó da esquerda como nó atual
                    if (noAtual.esq == null) {
                        noAtual.esq = novoNo;
                        break;
                    } else {
                        noAtual = noAtual.esq;
                    }   
                } else if (valor > noAtual.valor) {
                    // Atribuímos um novo nó a direita caso não exista
                    // ou seguimos adiante usando o nó da direita como nó atual
                    if (noAtual.dir == null) {
                        noAtual.dir = novoNo;
                        break;
                    } else {
                        noAtual = noAtual.dir;
                    }
                } else {
                    break;
                }
            }
        }
    },

    // Verifica se o valor existe ou não na árvore
    contem: function (valor) {
        var encontrado = false,
            noAtual = this.noRaiz;

        while (!encontrado && noAtual) {

            // Se o valor é menor que o do nó atual, atribua o nó da esquerda
            if (valor < noAtual.valor) {
                noAtual = noAtual.esq;
            }

            // Se o valor é maior que o do nó atual, atribua o nó da direita
            else if (valor > noAtual.valor) {
                noAtual = noAtual.dir;
            }

            // Valor do nó atual é igual ao valor passado como parâmetro
            else {
                encontrado = true;
            }
        }

        return encontrado;

    },

    // Retorna o número de níveis entre o nó atual e o descendente 
    // mais afastado, seguindo o caminho mais longo
    altura: function (no) {
        if (!no) return 0;
        var alturaEsq = this.altura(no.esq);
        var alturaDir = this.altura(no.dir);

        return Math.max(alturaEsq, alturaDir) + 1;
    },

    // Percorre a árvore e exibe os valores em ordem crescente no console
    percorrer: function (no) {
        if (no) {
            this.percorrer(no.esq);
            console.log(no.valor);
            this.percorrer(no.dir);
        }
    },

    // O menor é o nó do mais baixo nível a esquerda
    menorNo: function (no) {
        if (!no) {
            return 0;
        }
        if (no.esq) {
            return this.menorNo(no.esq);
        }
        return no.valor;
    },

    // O maior é o nó do mais baixo nível a direita
    maiorNo: function (no) {
        if (!no) {
            return 0;
        }
        if (no.dir) {
            return this.maiorNo(no.dir);
        }
        return no.valor;
    }
};

function add() {
    let novoNumer = null;


    novoNumer = document.getElementById("valorInput").value;
    arvore.adicionar(novoNumer)
    



}

function carregarArvore() {
   
    console.log(arvore.percorrer(arvore.noRaiz)); 
}
var arvore = new ArvoreBinaria();
/* arvore.adicionar(1);
arvore.adicionar(2);
arvore.adicionar(7);
arvore.adicionar(5);

arvore.percorrer(arvore.noRaiz); // 1, 2, 5, 7
arvore.contem(7); // true
arvore.maiorNo(arvore.noRaiz); // 7
arvore.menorNo(arvore.noRaiz); // 1
arvore.altura(arvore.noRaiz); // 4

console.log(arvore.contem(7)); */
