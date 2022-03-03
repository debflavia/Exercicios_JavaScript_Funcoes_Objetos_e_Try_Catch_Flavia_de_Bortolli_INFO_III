function calculadora() {
  var num1 = parseFloat(prompt("Informe o primeiro valor"));
  var num2 = parseFloat(prompt("Informe o segundo valor"));
  var opcao = parseInt(prompt("Escolha: \r 1 para soma; \r 2 para subtração; \r 3 para multiplicação; \r 4 para divisão;"));
  
 
  if(opcao === 1){
    soma(num1,num2);  
  } else if(opcao === 2){
    console.log (subtracao(num1,num2));  
  } else if(opcao === 3){
    console.log (multiplicacao(num1,num2));  
  } else if(opcao === 4){
    console.log (divisao(num1,num2));  
  }
}

function soma (num1, num2) {
  var result = num1 + num2;
  console.log(result);
  document.getElementById("q01").innerHTML = result;
}

var subtracao = function (num1, num2) {
  return (num1 - num2);
}

var multiplicacao = (num1, num2) => { 
    return num1 * num2;
}

var divisao = (num1, num2) => {
  return num1 / num2;
}
