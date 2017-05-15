// Closures

var helloWord = function(){
  var message = "Hello Word";
  return function(){
    return message;
  };
};

console.log(helloWord());
console.log(helloWord()());

// Closures mantem as referencias
