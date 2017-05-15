var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: function(){
    // this se refere ao escolo ao qual esta sendo invocado
    return this.idade;
  }
};

console.log(pessoa);
console.log(pessoa.getIdade);
console.log(pessoa.getIdade());

// Função fora do objeto

var getIdade = function() {
  return this.idade;
};

var pessoa = {
  nome: "João",
  idade: 20,
  getIdade: getIdade
};

console.log(getIdade());
console.log(pessoa.getIdade());
