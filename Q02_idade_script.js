var calculo = () => {
  var ano = parseInt(prompt("Digite o seu ano de nascimento:"));
   try {
   if (ano < 0 || idade < 0) {
    throw "Ano Inválido";
}
     var result = ano - idade;
     console.log (result); 
     document.getElementById("x").innerHTML = result;
   } catch (err) {
     console.log (err); 
     alert (err);
   }
  var idade = (2022 - ano);
  console.log (idade); 
  var texto = ("Quem nasceu em " + ano + " vai completar " +  idade + " anos em 2022." )
  document.getElementById("x").innerHTML = texto;
}
