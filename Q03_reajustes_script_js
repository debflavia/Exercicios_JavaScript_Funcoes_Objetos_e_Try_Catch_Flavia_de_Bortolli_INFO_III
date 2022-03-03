function calculo() {
var funcionario = { 
  nome: (prompt("Qual é o nome do funcionário:")),
  telefone: parseFloat(prompt("Informe o telefone de funcionario")), 
  salario: parseFloat(prompt("Qual é o salário do funcionário"))
}
  var reaj = parseFloat(prompt("Informe a porcentagem de reajuste no salário:"));

      try {
     if (reaj < 0) {
    throw "Valor do reajuste inválido!";
}
     var result = (funcionario.salario * (reaj/100));
     console.log (result); 
     document.getElementById("result").innerHTML = result;
   } catch (err) {
     console.log (err); 
        alert (err)
   }


  var result = (funcionario.salario * (reaj/100)); 
  var result1 = (result + funcionario.salario);

  var info = (funcionario.nome +" recebeu um aumento salarial!")

  var t1 = ("Nome: " + funcionario.nome + ".");

  var t2 = ("Telefone: " + funcionario.telefone + ".");

  var t3 = ("O salário atual era de R$ " + funcionario.salario + ".");

  var texto2 = ("Com um aumento de " + reaj + "%," + " o salário vai aumentar R$ " + result + " no próximo mês.");

  var texto3 = ("E a partir daí, " + funcionario.nome + " vai passar a ganhar R$ " + result1 + ".")

  document.getElementById("info").innerHTML = info;
  document.getElementById("t1").innerHTML = t1;
  document.getElementById("t2").innerHTML = t2;
  document.getElementById("dados").innerHTML = t3;
  document.getElementById("t4").innerHTML = texto2;
  document.getElementById("t3").innerHTML = texto3;
}
