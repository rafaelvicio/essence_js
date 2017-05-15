var carros = ["Ka", "Corsa", "Paio"];

var pos = carros.indexOf("Corsa");

// Remove o elemento Corsa do Array
carros.splice(pos, 1);

// Subistitui o elemento Corsa do Array
carros.splice(pos, 1, "Sonic");

// Adiciona o Corsa no começo do Array e move os demais
carros.splice(1, 0 "Corsa");

console.log(carros.toString());
