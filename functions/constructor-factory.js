//Function Factory
var criarPessoa = function(nome, idade){
  return {
    nome: nome,
    idade: idade
  };
};

console.log(criarPessoa("Pedro", 20));
console.log(criarPessoa("Maria", 30));

// Function Constructor

var Pessoa = function(nome, idade){
  this.nome = nome;
  this.idade = idade;
};

console.log(new Pessoa("Pedro", 20));
console.log(new Pessoa("Maria", 30));
