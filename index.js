// criando minha primeira classe

class Cliente {
  nome;
  cpf;
  agencia;
  saldo;
}

const c1 = new Cliente();

c1.nome = "Luciano";
c1.cpf = "00011122233";
c1.agencia = 1;
c1.saldo = 1000.0;

console.log(c1);