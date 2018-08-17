'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = platzom;
function platzom(str) {

  function minMay(str) {
    var length = str.length;
    var translation = '';
    var capitalize = true;
    for (var i = 0; i < length; i++) {
      var char = str.charAt(i);

      //operador ternario ? simboliza verdadero : simboliza falso
      translation += capitalize ? char.toUpperCase() : char.toLowerCase();
      capitalize = !capitalize; // =! simboliza que capitalize obtendra su valor contrario
      //si es falso sera verdadero y viceversa;
    }

    return translation;
  }

  var reverse = function reverse(str) {
    return str.split('').reverse().join('');
  };

  //regla 4
  if (str == reverse(str)) {
    return minMay(str);
  }

  var translation = str;

  //regla 1
  if (str.toLowerCase().endsWith('ar')) {
    translation = str.slice(0, -2);
  }

  //regla 2
  if (str.toLowerCase().startsWith('z')) {
    translation += 'pe'; //translation = translation + 'pe';
  }

  //regla 3
  var length = translation.length;
  if (length >= 10) {
    var firstHalf = translation.slice(0, Math.round(length / 2));
    var secondHalf = translation.slice(Math.round(length / 2));
    translation = firstHalf + '-' + secondHalf;
  }

  return translation;
}