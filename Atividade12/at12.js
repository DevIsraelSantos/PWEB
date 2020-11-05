document.getElementById('rdb1').checked = true;

function validar() {
      var name = document.form1.elements[1].value;
      var email = document.form1.elements[2].value;
      var comentario = document.getElementById('comment').value;
      
	  if (name.length < 10){
        alert("Nome pequeno!" + '\n' + 'Minimo 10 caracteres');
        return;
      }
      
      if (!email.includes("@", 0) && !email.includes('.', 0)){
        alert('Email inválido!');
        return;
      }
      
      if (comentario.length < 20){
        alert('Comentário muito pequeno!');
        return;
      }

      if(document.getElementById('rdb1').checked == true){
        alert('Volte sempre a esta pagina');
      }else{
		if(document.getElementById('rdb2').checked == true){
			alert('VQue bom que você voltou a visitar a pagina');
		}else{
        alert('Esqueceu a pesquisa');
		return;
		}
	  }
	 
	  limpar();
  }

  function desm1(){
    document.getElementById('rdb1').checked = false;
  }

  function desm2(){
    document.getElementById('rdb2').checked = false;
  }

  function limpar(){
    document.form1.elements[1].value = '';
    document.form1.elements[2].value = '';
    document.getElementById('comment').value = 'Escreva';
    document.getElementById('rdb1').checked = true;
  }