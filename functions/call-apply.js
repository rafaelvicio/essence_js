// Invocando uma função com Call e Apply

var getIdade = function(){
  return this.idade;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

console.log(pessoa.getIdade());
console.log(getIdade.call(pessoa));
console.log(getIdade.apply(pessoa));

// Aplly recebe os parametros por um array

var getIdade = function(extra){
  return this.idade + extra;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

console.log(pessoa.getIdade(2));
console.log(getIdade.call(pessoa, 2));
console.log(getIdade.apply(pessoa, [2]));
