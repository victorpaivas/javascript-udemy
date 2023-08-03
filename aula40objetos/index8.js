// Polimorfismo

// Superclass
function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
    if(valor > this. saldo){
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
}
Conta.prototype.verSaldo = function() {
    console.log(`Ag/c ${this.agencia}/${this.conta}` + ` Saldo: R$${this.saldo.toFixed(2)}`)
}

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: R$${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupanca(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite;
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const contaCorrente = new ContaCorrente(1500, '1565-4', 0, 100);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);

console.log()

const contaPoupanca = new ContaPoupanca(1300, '1234-5', 0);
contaCorrente.depositar(10);
contaCorrente.sacar(110);
contaCorrente.sacar(1);