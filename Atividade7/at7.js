var entrada = []
for (i = 1; i <= 3; i++){
    entrada[i-1] = prompt(i + "º número: ");
}
maior(entrada[0], entrada[1], entrada[2]);

function maior(num1, num2, num3){
    var n1 = parseFloat(num1)
    var n2 = parseFloat(num2)
    var n3 = parseFloat(num3)
	var saida = Math.max(n1, n2, n3) 
    
	var s1 = ""
	var s2 = ""
	var s3 = ""
	
    
		if(n1 == saida)
			s1 = "Primeiro classificado como maior valor"
		else
			s1 = "------"
		if(n2 == saida)
			s2 = "Segundo classificado como maior valor"
		else
			s2 = "------"
		if(n3 == saida)
			s3 = "Terceiro classificado como maior valor"
		else
			s3 = "------"
		
		
	
	alert("Maior Valor: "+ saida + "\n" + s1  + "\n" + s2 + "\n" + s3)
    
}