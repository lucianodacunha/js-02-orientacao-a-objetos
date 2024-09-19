export class Cliente {
  nome;
  cpf;

  toString(){
    return `CLIENTE> Nome: ${this.nome}, CPF: ${this.cpf}`;
  }
}