import {Cliente} from "./Cliente.js"
import {Conta} from "./Conta.js"

const cl1 = new Cliente("Luciano", "00011122233");
const cl2 = new Cliente("Paris", "11100022244");

const co1 = new Conta(cl1);
const co2 = new Conta(cl2);

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
