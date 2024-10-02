//1 QUESTÃO 
let elementos = ['Água' ,'Fogo' ,'Ar' ,'Terra'];
let In = document.getElementById('elements-in');
let Of = document.getElementById('elements-of');

// IN
for (let indice in elementos){
    // Cria um novo parágrafo para cada linha
    let p = document.createElement('p');
    p.textContent = elementos[indice]; // Define o texto do parágrafo
    In.appendChild(p); // Adiciona o parágrafo à div
}

// FOR
for (let elemento of elementos){
    let a = document.createElement('a');
    a.textContent = elemento;
    Of.appendChild(a);
}

//3 QUESTÃO
let i = 0;
let questionThree = document.getElementById('question-three');
let numero = prompt('Insira um valor');

while (numero <= 10 ){
    let x = document.createElement('x');
    x.textContent = "Linha" + i;
    questionThree.appendChild(x);
    i++;
    numero++;
}

//4 QUESTÃO
// Pede ao usuário para inserir a quantidade de números pares desejada (de 2 a 18)
let quantidade = prompt('Informe a quantidade de números pares (entre 2 e 18):');
quantidade = parseInt(quantidade); // Converte a entrada para número inteiro
// Verifica se a quantidade está dentro do intervalo permitido
if (quantidade >= 2 && quantidade <= 18) {
    let vetor = []; // Vetor onde os números pares serão armazenados
    let numero = 2; // Inicia com o primeiro número par
    let contador = 0;

    // Laço Do-While para adicionar números pares ao vetor
    do {
        vetor.push(numero); // Adiciona o número par ao vetor
        numero += 2; // Incrementa o número para o próximo par
        contador++;
    } while (contador < quantidade);

    // Exibe o conteúdo do vetor na página
    let z = document.getElementById('question-four');
    z.innerHTML = '<p>Os números pares são: ' + vetor.join(', ') + '</p>';
} else {
    // Exibe uma mensagem de erro se a quantidade estiver fora do intervalo
    alert('Quantidade inválida. Informe um número entre 2 e 18.');
}

//5 QUESTÃO
// Função que converte uma frase para maiúsculas
function converterMaiuscula(texto) {
    return texto.toUpperCase(); // Converte o texto para maiúsculas
}

// Função que encontra a posição de uma palavra dentro de uma frase
function encontrarPalavra(frase, palavra) {
    return frase.indexOf(palavra); // Retorna o índice da primeira ocorrência da palavra
}

// Função que extrai uma parte da frase a partir de uma posição específica
function extrairParte(frase, inicio, fim) {
    return frase.slice(inicio, fim); // Extrai a parte da frase entre os índices 'inicio' e 'fim'
}

// Frase de exemplo
let frase = "O JavaScript é incrível.";

// Aplicando as funções de string
let maiuscula = converterMaiuscula(frase); // Converte a frase para maiúsculas
let posicaoPalavra = encontrarPalavra(frase, "incrível"); // Encontra a posição da palavra "incrível"
let parteFrase = extrairParte(frase, 2, 12); // Extrai parte da frase ("JavaScript")

// Exibe os resultados na página
let y = document.getElementById('question-five');
y.innerHTML = `
    <p>Frase original: ${frase}</p>
    <p>Frase em maiúsculas: ${maiuscula}</p>
    <p>Posição da palavra "incrível": ${posicaoPalavra}</p>
    <p>Parte extraída da frase: "${parteFrase}"</p>
`;