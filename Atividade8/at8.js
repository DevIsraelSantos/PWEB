var objeto1 = {
    RA: 123,
    NOME: "Israel"
};


var objeto2 = new Object();
objeto2.RA = 123;
objeto2.NOME = "Israel";


var objeto3 = {};
var p1 = 'RA';
var p2 = 'NOME';
objeto3[p1] = 123;
objeto3[p2] = "Israel";


alert(	"objeto1 -> RA: " + objeto1.RA + "| Nome: " + objeto1.NOME + "\n" + 
		"objeto2 -> RA: " + objeto2.RA + "| Nome: " + objeto2.NOME + "\n" + 
		"objeto3 -> RA: " + objeto3.RA + "| Nome: " + objeto3.NOME)