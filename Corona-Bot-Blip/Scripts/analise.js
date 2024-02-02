function run(input){

    function removerAcentos(newStringComAcento) {
        var string = newStringComAcento;
          var mapaAcentosHex 	= {
              a : /[\xE0-\xE6]/g,
              e : /[\xE8-\xEB]/g,
              i : /[\xEC-\xEF]/g,
              o : /[\xF2-\xF6]/g,
              u : /[\xF9-\xFC]/g,
              c : /\xE7/g,
              n : /\xF1/g
          };
      
          for ( var letra in mapaAcentosHex ) {
              var expressaoRegular = mapaAcentosHex[letra];
              string = string.replace( expressaoRegular, letra );
          }
     
          return string;
      }

    entrada = removerAcentos(input).toLowerCase();


    var avore_cenario = [
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS = 0 / GRAVE NAO",
            "cenario": "A1",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS = 0 / GRAVE SIM",
            "cenario": "A2",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS <= 3 / GRAVE NAO",
            "cenario": "A3",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS <= 3 / GRAVE SIM",
            "cenario": "A4",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS > 3 / GRAVE NAO",
            "cenario": "A5",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE NAO / SINTOMAS > 3 / GRAVE SIM",
            "cenario": "A6",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS = 0 / GRAVE NAO",
            "cenario": "A7",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS = 0 / GRAVE SIM",
            "cenario": "A8",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS <= 3 / GRAVE NAO",
            "cenario": "A9",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS <= 3 / GRAVE SIM",
            "cenario": "A10",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS > 3 / GRAVE NAO",
            "cenario": "A11",
            "risco": "nao"
        },
    
        {
            "sintoma": "GRUPO RISCO NAO / FEBRE SIM / SINTOMAS > 3 / GRAVE SIM",
            "cenario": "A12",
            "risco": "nao"
        },
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS = 0 / GRAVE NAO",
            "cenario": "B1",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS = 0 / GRAVE SIM",
            "cenario": "B2",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS <= 3 / GRAVE NAO",
            "cenario": "B3",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS <= 3 / GRAVE SIM",
            "cenario": "B4",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS > 3 / GRAVE NAO",
            "cenario": "B5",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE NAO / SINTOMAS > 3 / GRAVE SIM",
            "cenario": "B6",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS = 0 / GRAVE NAO",
            "cenario": "B7",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS = 0 / GRAVE SIM",
            "cenario": "B8",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS <= 3 / GRAVE NAO",
            "cenario": "B9",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS <= 3 / GRAVE SIM",
            "cenario": "B10",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS > 3 / GRAVE NAO",
            "cenario": "B11",
            "risco": "sim"
        },
        
        {
            "sintoma": "GRUPO RISCO SIM / FEBRE SIM / SINTOMAS > 3 / GRAVE SIM",
            "cenario": "B12",
            "risco": "sim"
        }
        
    ]

    var numeros = [

        { numero: 0, sinonimos: ["0", "zero"] },
        { numero: 1, sinonimos: ["1", "um",  "uma", "one"] },
        { numero: 2, sinonimos: ["2", "dois", "duas", "two"] },
        { numero: 3, sinonimos: ["3", "tres", "trez", "three"] },
        { numero: 4, sinonimos: ["4", "quatro", "four"] },
        { numero: 5, sinonimos: ["5", "cinco", "sinco", "five"] },
        { numero: 6, sinonimos: ["6", "seis", "six"] },
        { numero: 7, sinonimos: ["7", "sete", "seven"] },
        { numero: 8, sinonimos: ["8", "oito", "eight"] },
        { numero: 9, sinonimos: ["9", "nove", "nine"] }
    ]

    var arr = entrada.split(' / ');

    var num =  '';

    numeros.forEach(nu => {

        nu.sinonimos.forEach(n => {

            return arr.forEach(a => {
                if(a.indexOf(n) >= 0)
                    num = nu.numero;
            })
        })

    })

    var sintomas = '';

    if(num == 0){
        sintomas =  'sintomas = 0'
    }
    else if(num <= 3){
        sintomas =  'sintomas <= 3'
    }
    else if(num > 3){
        sintomas =  'sintomas > 3'
    }
    else {
        sintomas = 'sintomas = 0'
    }

    var result = (`${arr[0]} / ${arr[1]} / ${sintomas} / ${arr[3]}`).toUpperCase()


    var cenario = avore_cenario.find(ac => ac.sintoma == result);


   var analise = `${cenario.risco} - ${cenario.cenario}`;

   return analise
}


var input = 'GRUPO RISCO nao / FEBRE nao / SINTOMAS 0 / GRAVE nao'
document.write( `${run(input)} *** ${input}` )





