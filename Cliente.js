export class Cliente {
  _nome;
  _cpf;

  set nome(nome) {
    this._nome = nome;
  }

  get nome(){
    return this._nome;
  }

  get cpf(){
    return this._cpf;
  }  
  
  constructor(nome, cpf){
    this.nome = nome;
    this._cpf = cpf;
  }

  toString(){
    return `CLIENTE> Nome: ${this.nome}, CPF: ${this.cpf}`;
  }
}