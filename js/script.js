function calcular(tipo, valor){
   
    if(tipo ==='acao'){

        if( valor ==="c"){
            //Limpar o campo resultado
            document.getElementById('resultado').value =''
        }
        if( valor ==='+' || valor==='-' || valor=== '*' || valor=== '/' || valor ==='.'){
            document.getElementById('resultado').value += valor
        }

        if( valor ==='='){
            var valor_total =eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_total

        }
    }else if(tipo ==='valor'){
        document.getElementById('resultado').value +=valor
    }
}