var carros = [];

carros[0] = {marca: "Ford", preco: 28800};
carros[0] = {marca: "Chevrolet", preco: 34750};
carros[0] = {marca: "Fiat", preco: 32000};

carros.reduce(function(prev, cur){
  return prev + cur.preco;
}, 0);
