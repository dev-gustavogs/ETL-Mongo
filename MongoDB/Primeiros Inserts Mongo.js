// primerias inserções no mongo

use("Aula");
db.getCollection("clientes").insertOne({
  nome: "Gustavo",
  idade: 26,
  sexo: "M",
});

//Médoto 2
use("Aula");
db.clientes2.insertOne({
  nome: "Gustavo",
  idade: 26,
  sexo: "M",
  endereco: "rua x numero 5555",
});

//usando insertmany
use("Aula");
db.clientes.insertMany([
  { nome: "Luiza", idade: 27, sexo: "F" },
  { nome: "Mariana", idade: 15, endereco: "Rua t numero 5444" },
  { nome: "Augusto", idade: 33, endereco: "Rua t numero 4747" },
]);
