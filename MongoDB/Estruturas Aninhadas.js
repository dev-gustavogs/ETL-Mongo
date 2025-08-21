// objeto JSON aninhado um objeto pode conter outros como seus valores ou tabela referencia no SQL.
use("Aula");
db.clientes.insertMany([
  {
    nome: "Jackson",
    idade: 66,
    sexo: "M",
    email: "jackson@teste.com.br",
    endereco: {
      rua: "Rua Golfo",
      numero: 55,
      complemento: "casa",
    },
  },
]);

//array uma coleção de elementos do mesmo tipo
use("Aula");
db.clientes.insertMany([
  {
    nome: "Julia",
    idade: 15,
    sexo: "F",
    email: "julia@teste.com.br",
    endereco: {
      rua: "Rua do Amor",
      numero: 77,
      complemento: "APT",
    },
  },
  {
    nome: "Malu",
    idade: 23,
    sexo: "F",
    email: "malu@teste.com.br",
    cor_preferida: ["Azul", "Vermelho"],
    endereco: {
      rua: "Rua Xavier",
      numero: 99,
      complemento: "APT",
    },
    lista_numero: [15, 20, 25, 35],
  },
]);
