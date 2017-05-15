var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[1] = {marca: "Chevrolet", modelo: "Corsa"};
carros[2] = {marca: "Fiat", modelo: "Palio"};

carros.sort(function(a, b){
  return a.preco - b.preco;
});

carros.toString();
