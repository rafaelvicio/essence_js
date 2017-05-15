var carros = [];

carros[0] = {marca: "Ford", modelo: "Ka"};
carros[0] = {marca: "Chevrolet", modelo: "Corsa"};
carros[0] = {marca: "Fiat", modelo: "Palio"};

carros.map(function (elemento){
  return elemento.marca;
});

carros.map(function (elemento){
  return element.modelo.legnth;
});
