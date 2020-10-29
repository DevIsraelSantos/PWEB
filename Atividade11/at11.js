
  function up(){
	
    document.getElementById('texto').value = document.getElementById('texto').value.toUpperCase();
    document.getElementById('rdb2').checked = false;
  }

  function down(){
    document.getElementById('texto').value  = document.getElementById('texto').value.toLowerCase();
    document.getElementById('rdb1').checked = false;
  }
