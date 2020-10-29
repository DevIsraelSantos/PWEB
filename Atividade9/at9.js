class rect{
    constructor(x,y){
        this.base = x;
        this.altura = y;
    }

    calcArea(){
        return this.base * this.altura;
    }
} 
var x = parseFloat(prompt("Calculo da area\nInforme a Base: "));
var y = parseFloat(prompt("Calculo da area\nInforme a Altura: "));
var valor = new rect(x, y);
alert("Area do rec "+x+"x"+ y+" = " + valor.calcArea());


function Conta(nome, banco, numero, saldo){
    this.nome = nome;
    this.banco = banco;
    this.numero = numero;
    this.saldo = saldo;
    
    this.getNome = function(){
        return this.nome;
    }

    this.getBanco = function(){
        return this.banco;
    }

    this.getNumero = function(){
        return this.numero;
    }

    this.getSaldo = function(){
        return this.saldo;
    }
}

function Corrente(nome, banco, numero, saldo, despesas){
    Conta.call(this, nome, banco, numero, saldo);

    this.despesas = despesas;

    this.getDespesas = function(){
        return this.despesas;
    }
}


function Poupanca(nome, banco, numero, saldo, juros){
    Conta.call(this, nome, banco, numero, saldo);

    this.juros = juros;
    
    this.getJuros = function(){
        return this.juros;
    } 
	this.CalcJuros = function(){
        return this.juros * this.saldo;
    } 
}
conta = new Conta('Paulo', '001', '123456', 10.0);
contaCorrente = new Corrente(conta.getNome(), conta.getBanco(), conta.getNumero(), conta.getSaldo(), 20);
contaPoupanca = new Poupanca(conta.getNome(), conta.getBanco(), conta.getNumero(), conta.getSaldo(), 0.005);

alert(	"Conta: " 				+ conta.getNumero() + "\n" +
		"Banco: "				+ conta.getBanco()+ "\n" +
		"Proprietario: "		+ conta.getNome()+ "\n" +
		"Saldo atual: "			+ conta.getSaldo()+ "\n" +
		"Despesa corrente: "	+ contaCorrente.getDespesas()+ "\n" +
		"Juros de poupança: "	+ contaPoupanca.getJuros()+ "%\n" +
		"Bonus se aplicado o saldo por 1 mes: "	+ contaPoupanca.CalcJuros());
