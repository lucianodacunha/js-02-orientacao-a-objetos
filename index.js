// criando minha primeira classe

class Cliente {
  nome;
  cpf;
}

class Conta {
  numero;
  cliente;
  _saldo = 0;

  sacar (valor){
    console.log(`Sacando ${valor}.`);
    if (valor > this._saldo ) {
      console.log(`Saldo insuficiente.`);
      return; // early return
    }

    this._saldo -= valor;    
  }

  depositar(valor){
    console.log(`Depositando ${valor}.`);
    if (valor <= 0){
      console.log(`Valor incorreto.`);
      return;
    }
    
    this._saldo += valor;

  }
}

const cliente = new Cliente();

cliente.nome = "Luciano";
cliente.cpf = "00011122233";

const conta = new Conta();

conta.numero = 1;
conta.cliente = cliente;

console.log(conta);

conta.sacar(1100.0);
console.log(conta);

conta.depositar(100.0);
conta.depositar(-100.0);

console.log(conta);