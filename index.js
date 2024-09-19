import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const cl1 = new Cliente();

cl1.nome = "Luciano";
cl1.cpf = "00011122233";

const cl2 = new Cliente();
cl2.nome = "Paris"
cl2.cpf = "11100022244"

const co1 = new Conta();
const co2 = new Conta();

co1.numero = 1;
co1.cliente = cl1;

co2.numero = 2;
co2.cliente = cl2;

console.log(co1.toString());
console.log(co2.toString());

co1.sacar(1100.0);
console.log(co1.toString());
console.log(co2.toString());

co1.depositar(100.0);
co1.depositar(-100.0);
co2.depositar(500.0);

console.log(co1.toString());
console.log(co2.toString());

co1.sacar(10);
co2.transferir(co1, 100.0);

console.log(co1.toString());
console.log(co2.toString());