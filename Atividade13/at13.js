function ocultar(){
			document.getElementById("questionamento").style.opacity = 0;
			document.getElementById("questSim").disabled = true;
			document.getElementById("questNao").disabled = true;
			document.getElementById("curso").selectedIndex = 0;
}
function perguntar(){
			document.getElementById("questionamento").style.opacity = 1;
			document.getElementById("questSim").disabled = false;
			document.getElementById("questNao").disabled = false;
}
function sim(){
			switch(document.getElementById("curso").value){
				case 'ads':
					window.open("http://www.fatecsorocaba.edu.br/curso_ads.asp");
					break;
				case 'ea':
					window.open("http://www.fatecsorocaba.edu.br/curso_ea.asp");
					break;
				case 'fm':
					window.open("http://www.fatecsorocaba.edu.br/curso_fm.asp");
					break;
				default:
					alert('Selecione um curso!');
					break;
			}
}
function nao(){
	ocultar();
}