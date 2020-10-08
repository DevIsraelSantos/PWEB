const player = prompt("Escolha sua jogada:\n1) Pedra\n2) Papel\n3) Tesoura")

var cpu = Math.random();

if(cpu < 0.3){
	cpu = 1;
}else{
	
	if(cpu > 0.6){
	cpu = 3;
	}else{
		cpu = 2;
	}
}

var resultado = "";

if(cpu == player){
	resultado = "Empate";
}else{
	
	if(player == 1){
	
		if(cpu == 2){
			resultado = "Perdeu - Papel cobre pedra";
		}else{
			resultado = "Ganhou - Pedra quebra tesoura";
		}

	}else if(player == 2){
	
		if(cpu == 1){
			resultado = "Ganhou - Papel cobre pedra";
		}else{
			resultado = "Perdeu - Tesoura corta papel";
		}
	
	}else if(player == 3){
	
		if(cpu == 1){
			resultado = "Perdeu - Pedra quebra tesoura";
		}else{
			resultado = "Ganhou - Tesoura corta papel";
		}
	
	}else {
		
	}
	
}

alert("Escolha sua jogada:\n1) Pedra\n2) Papel\n3) Tesoura\nPlayer: >> "+ player+" x "+ cpu+" << Cpu\n"+resultado);