"use strict"; // Use ECMAScript 5 strict mode in browsers that support it
function calculate() {
  var result;
  var temp = original.value;
  var regexp = /^[?:\s*]?\s*([-+]?\d+(?:\.\d*)?)\s*[e]?\s*([+-]?\d*)\s*([Cc](?:Celsius)?|[Ff](?:a|ar|ahrenheit)?)\b/;

  var m = temp.match(regexp);

  if (m) {
    var num = m[1];
    var ep = m[2];
    var type = m[3];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * Math.pow(10,ep) * 9/5)+32;
      result = result.toFixed(1)+" Farenheit"
    }
    else {
      result = (num * Math.pow(10,ep) - 32)*5/9;
      result = result.toFixed(1)+" Celsius"
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Try something like '-4.2C' instead";
  }
}
