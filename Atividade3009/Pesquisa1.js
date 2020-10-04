var somaIdade = 0;
var MenorIdade = 0;
var MaiorIdade = 0;
var qtdePessimo = 0;
var qtdeHomens = 0;
var qtdeMulheres = 0;
var qtdeBom = 0;

var qtdeAvaliados = prompt("Qtde de avaliados:")

for (i = 1; i <= qtdeAvaliados; i++) {
  var idade = prompt("("+i+")" + " Idade:")
  var sexo = prompt("("+i+")" + " Sexo: (1 - Masculino, 2 - Feminino)")
  var opniao = prompt("("+i+")" + " opiniao: (pessimo - 1 até 4 - Otimo")
  
  somaIdade = Number(idade) + Number(somaIdade);
  
  if(Number(i) == 1){
	MenorIdade = Number(idade);
	MaiorIdade = Number(idade);
  }else{
	 
	 if(Number(idade) > MaiorIdade){
		 MaiorIdade = Number(idade);
	 }
	 if(Number(idade) < MenorIdade){
		 MenorIdade = Number(idade);
	 }
	 
  }
  
  if(Number(sexo) == 1){
	qtdeHomens = Number(qtdeHomens) + Number(sexo);
  }
  
  if(Number(opniao) == 1){
	qtdePessimo = Number(qtdePessimo) + Number(opniao);
  }
  
  if(Number(opniao) >= 3){
	qtdeBom = Number(qtdeBom) + Number(1);
  }
  
}

var mediaIdade = Number(somaIdade) / Number(qtdeAvaliados);
qtdeMulheres = Number(qtdeAvaliados) - Number(qtdeHomens);
var porcen = Number(qtdeBom) * Number(100) / Number(qtdeAvaliados);

alert(	"Foram avaliadas " + qtdeAvaliados + " pessoas: " + 
		" ( "+ qtdeHomens + " homens" + 
		" - "+ qtdeMulheres + " Mulheres )\n\n" + 
		"Media de idade: "+ mediaIdade + "\n" +
		"Maior idade: "+ MaiorIdade+ "\n"  +
		"Menor idade: "+ MenorIdade+ "\n\n" +
		
		"Tiveram "+ qtdePessimo + " notas pessimo\n" +
		porcen+ "% responderam otimo ou bom\n"
		
	);

 