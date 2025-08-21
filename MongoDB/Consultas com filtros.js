// consulta
//select * from Aula.Clientes
use("Aula");
db.clientes.find();

// filtro nome = Gustavo
use("Aula");
db.clientes.find({ nome: "Gustavo" });

// varios nomes $in
use("Aula");
db.clientes.find({ nome: { $in: ["Gustavo", "Luiza"] } });

//  valores
use("Aula");
db.clientes.find({ idade: 26 });

// pessoas maiores de 18

use("Aula");
db.clientes.find({ idade: { $gt: 18 } });

/*
Igual a:           $eq
Diferente de:      $ne
Maior que:         $gt
Maior ou igual a:  $gte
Menor que:         $lt
Menor ou igual a:  $lte
Dentro de:         $in
Não dentro de:     $nin
Existe:            $exists
*/
