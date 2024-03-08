const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
  });
 
  readline.question("Quantos anos você tem? ", (idade) =>{
 
  if (idade < 16){
    console.log("Você não tem idade para votar.")
  }
  else if (idade > 16 && idade < 18){
    console.log("Você tem direito a voto facultativo.")
  }
  else if (idade > 70){
    console.log("Você tem direito a voto facultativo.")
  }
  else{
    console.log("O seu voto é obrigatorio")
  }
  readline.close()
 
})