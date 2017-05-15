// Diretamente

var soma = function(a, b){
  return a + b;
};

soma(2, 2);

//

var produto = {nome: 'Sapato', preco: 150};

var formulaIMportoA = function(preco) {
  return preco*0.1;
};
var formulaIMportoB = function(preco){
  return preco*0.2;
};

var calcularPreco = function(produto, formulaImposto){
  return produto.preco + formulaImposto(produto.preco);
};

calcularPreco(produto, formulaIMportoA);
calcularPreco(produto, formulaIMportoB);
