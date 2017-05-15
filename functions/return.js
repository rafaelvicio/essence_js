var helloWord = function(){
  return function(){
    return "Hello Word";
  };
};

// Imprimi Funcion
console.log(helloWord);
console.log(helloWord());

// Imprimi Hello Word
console.log(helloWord()());
