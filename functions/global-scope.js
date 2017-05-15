// Scopo GLobal
var counter = 0;
var add = function() {
  return ++counter;
};

console.log(add());
console.log(add());
console.log(add());

var itens = [];
var add = function(item) {
  itens.push(item);
  return itens;
};

console.console.log(add('A'));
console.console.log(add('B'));
console.console.log(add('C'));

// Object

var counter = {
  value: 0,
  add: function() {
    return ++this.value;
  }
};

console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

var itens = {
  value: [],
  add: function (item){
    this.value.push(item);
    return this.value;
  }
};

console.console.log(itens.add('A'));
console.console.log(itens.add('B'));
console.console.log(itens.add('C'));

// functions

var counter = function() {
  var value = 0;
  var add = function(){
    return ++this.value;
  };
};

console.log(counter.value);
console.log(counter.add());

// Factory Function

var CreateCounter = function(){
  var value = 0;
  return {
    add: function(){
      return ++value;
    }
  };
};

var counter = CreateCounter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

// Constructor counter

var Counter = function() {
  var value = 0;
  this.add = function(){
    return ++value;
  };
};

var counter = new Counter();
console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());

// IIFE

var counter = (function(){
  var _value = 0;
  var _add = function(){
    return ++value;
  };
  var _reset = function(){
    _value = 0;
  };
  return {
    add: _add,
    reset: _reset
  };
})();

console.log(counter.value);
console.log(counter.add());
console.log(counter.add());
console.log(counter.add());
counter.reset();
console.log(counter.add());
