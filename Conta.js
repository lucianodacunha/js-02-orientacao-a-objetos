import { Cliente } from "./Cliente.js"

export class Conta {
  static _seq = 0;
  _numero;
  _cliente;
  _status = false;
  _saldo = 0;

  get numero(){
    return this._numero;
  }

  get cliente(){
    return this._cliente;
  }

  set cliente(cliente){
    if (cliente instanceof Cliente){
      this._cliente = cliente;
    } else {
      console.log(`Tipo de ${cliente} inválido.`);
    }
  }

  get saldo(){
    return this._saldo;
  }

  constructor(cliente){
    Conta._seq++;
    this._numero = Conta._seq;
    this.cliente = cliente;
    this._status = true;    
  }

  sacar (valor){
    console.log(`Sacando ${valor} da conta ${this.numero}...`);
    if (valor > this._saldo ) {
      console.log(`Saldo insuficiente.`);
      return false; // early return
    }

    console.log("OK");
    this._saldo -= valor;    
    return true;
  }

  depositar(valor){
    console.log(`Depositando ${valor} na conta ${this.numero}...`);
    if (valor <= 0){
      console.log(`Valor incorreto.`);
      return;
    }

    console.log("OK");
    this._saldo += valor;
  }

  transferir(conta, valor){

    console.log(
        `Transferindo ${valor} da conta ${this.numero} ` +
        `para a conta ${conta.numero}...`
    );

    if (this.sacar(valor)){
      conta.depositar(valor)
      return true;
    }

    console.log(`Valor inválido.`);
    return false;

  }

  toString(){
    return `CONTA> Numero: ${this.numero}, Cliente: ${this.cliente}, ` + 
    `Saldo: ${this._saldo}`;
  }
}