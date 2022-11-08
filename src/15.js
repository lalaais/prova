function sortearNumero(tentativas){

    let number = parseInt(Math.random() * 1000);
    for(i = 1; i <= 10; i++){
        if(tentativas > 10) throw new Error ('Limite de tentativas');

        else (tentativas < 10)
          print ('Você tem mais tentativas')
    }

    let msg= ''

    if(tentativas === number)  msg = "Acertou";
    if(tentativas < number ) msg = "Maior";
    if(tentativas > number ) msg = "Menor";
}

function ganhou()

console.log()


