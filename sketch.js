// os farofeiro, 12, comédia
// Guardiões da galáxia, 12, fantasia, aventura, comédia, ficção cientifica
// minha mãe é uma peça2, 12, comédia
// homem-aranha sem volta para casa, 12, ação, fantasia, ficção cientifica, super-herói
// homem-formiga e a vespa, 12, ação, aventura, ficção cientifica, super-heróifunction setup() {






function setup() {
createCanvas(400, 400);
}

function draw() {
  background(220);
  let idade = 15; 
  let recomendacao = geraRecomendacao(idade);
    text(recomendacao, width/2, height/2);
}

function geraRecomendacao(idade) {
    if(idade >= 10) {



