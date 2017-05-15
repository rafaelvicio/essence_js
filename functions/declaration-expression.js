// Declaration
// Declaration e carregada antes da execuçã, por isso ela pode ser invocada antes de ser definida.
console.log(soma);
console.log(soma(2,2));

function soma(a, b){
  return a + b;
}

//expression
// expression e carregada na interpretação

var soma = function(a, b){
  return a + b;
};

console.log(soma);
console.log(soma(2, 2));

// Ela tambem pode receber um nome

var soma = function soma(a,b){
  return a + b;
};

console.log(soma);
console.log(soma(2, 2));
